<script lang="ts" setup>
type Props = {
  jobId: string;
  role: string;
};

const props = defineProps<Props>();
const toast = useToast();

const isMInfoOpen = ref(false);
const isMEmailOpen = ref(false);
const isMaskOpen = ref(false);

const defaultData = computed(() => constantsDefault(props.jobId, props.role));

const infoState = useUtilsValidatedStorage<Partial<SchemasInfo>>(
  "nexuron:infoForm",
  schemasInfo().partial(),
  defaultData.value.info
);

const emailTokenState = useUtilsValidatedStorage<Partial<SchemasEmailToken>>(
  "nexuron:emailToken",
  schemasEmailToken().partial(),
  defaultData.value.token
);

const detailState = useUtilsValidatedStorage<SchemasDetail>(
  "nexuron:detailForm",
  schemasDetail().schema,
  defaultData.value.detail
);

const detail = computed({
  get: () => detailState.value[props.jobId][props.role],
  set: (value) => {
    detailState.value[props.jobId][props.role] = value;
  },
});
const isValid = computed(() => {
  const infoValid = schemasInfo().safeParse(infoState.value).success;
  const tokenValid = schemasEmailToken().safeParse(
    emailTokenState.value
  ).success;
  return [infoValid, tokenValid];
});

watch(
  () => isValid.value,
  ([infoValid, tokenValid]) => {
    isMaskOpen.value = !infoValid || !tokenValid;
  },
  { immediate: true }
);

async function onInfoSubmit(data: Partial<SchemasInfo>) {
  try {
    await $fetch("/api/email/code", {
      method: "POST",
      body: data || {},
    });

    toast.add({
      title: "Thành công",
      description: "Xác thực thông tin cá nhân thành công",
      color: "success",
    });

    isMInfoOpen.value = false;
    isMEmailOpen.value = true;
  } catch (err: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = err as { status?: number; data?: any; message?: string };
    infoState.value = {};
    emailTokenState.value = {};
    toast.add({
      title: "Lỗi",
      description: error.data?.message
        ? error.data?.message
        : error.data?.data?.msg
        ? error.data?.data?.msg
        : error.message
        ? error.message
        : "Xác thực email thất bại",
      color: "error",
    });
  }
}

async function onEmailTokenSubmit(data: Partial<SchemasEmailToken>) {
  emailTokenState.value.token = data.token || "";
  isMEmailOpen.value = false;
  toast.add({
    title: "Thành công",
    description: "Xác thực email thành công",
    color: "success",
  });
}

async function onDetailSubmit(data: Partial<SchemasDetailEntry>) {
  try {
    await $fetch("/api/apply", {
      method: "POST",
      query: { jobId: props.jobId, role: props.role },
      body: {
        user_info: infoState,
        detail: data || {},
        verify_code: emailTokenState.value.token,
      },
    });

    toast.add({
      title: "Success",
      description: "Nộp đơn thành công",
      color: "success",
    });

    detailState.value[props.jobId][props.role] = {} as SchemasDetail;
  } catch (err: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = err as { status?: number; data?: any; message?: string };
    if (
      error?.status === 400 &&
      (error?.data?.data?.msg === "Invalid or already used verification code" ||
        error?.message === "Invalid or already used verification code")
    ) {
      infoState.value = {};
      emailTokenState.value = {};
      toast.add({
        title: "Lỗi",
        description:
          "Mã xác thực không hợp lệ hoặc đã được sử dụng. Vui lòng nhập lại thông tin cá nhân và xác thực email.",
        color: "error",
      });
      window.location.reload();
    } else {
      toast.add({
        title: "Lỗi",
        description: error.data?.message
          ? error.data?.message
          : error.data?.data?.msg
          ? error.data?.data?.msg
          : error.message
          ? error.message
          : "Nộp đơn thất bại",
        color: "error",
      });
    }
  }
}
</script>

<template>
  <div>
    <LazyPagesApplyJobIdModal
      v-model:open="isMInfoOpen"
      hydrate-on-visible
      title="Nhập thông tin cá nhân trước khi nộp đơn"
    >
      <LazyPagesApplyJobIdForm
        v-model="infoState"
        :schema="schemasInfo()"
        :fields="constantsFormInfo()"
        :ui="{
          root: 'space-y-4',
          wrapper: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
        }"
        submit-text="Gửi thông tin cá nhân"
        @submit="onInfoSubmit"
      />
    </LazyPagesApplyJobIdModal>

    <LazyPagesApplyJobIdModal
      v-model:open="isMEmailOpen"
      hydrate-on-visible
      title="Nhập mã xác thực đã gửi đến email của bạn"
    >
      <LazyPagesApplyJobIdForm
        v-model="emailTokenState"
        :schema="schemasEmailToken()"
        :fields="constantsFormEmailToken()"
        :ui="{ root: 'space-y-4' }"
        submit-text="Xác thực"
        @submit="onEmailTokenSubmit"
      />
    </LazyPagesApplyJobIdModal>

    <div class="flex-1 flex flex-col">
      <div class="text-4xl font-semibold mt-20 mb-12">
        {{ teamDescription(jobId, role)?.title }}
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <PagesApplyJobIdContent :job-id="jobId" :role="role" />
        <div class="flex-1 flex p-1 h-fit">
          <LazyPagesApplyJobIdForm
            v-model="detail"
            :schema="schemasDetail().entrySchema"
            :fields="constantsFormDetail()"
            :ui="{
              root: 'relative space-y-4 border-2 border-muted rounded-md p-4 w-full',
              wrapper: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
            }"
            submit-text="Nộp đơn"
            @submit="onDetailSubmit"
          >
            <template #header>
              <div class="text-3xl font-medium text-highlighted pb-3 pt-1">
                Nộp đơn ứng tuyển
              </div>
            </template>
            <template #trailing-actions>
              <div
                v-if="isMaskOpen"
                class="absolute h-full w-full bg-transparent top-0 left-0"
                @click="
                  () => {
                    if (!isValid[0]) isMInfoOpen = true;
                    else if (!isValid[1]) isMEmailOpen = true;
                  }
                "
              />
            </template>
          </LazyPagesApplyJobIdForm>
        </div>
      </div>
      <div class="mt-4">
        <UButton
          variant="link"
          class="text-muted-foreground underline underline-offset-3"
          to="/jobs"
          icon="i-lucide-arrow-left"
        >
          Tất cả vị trí đang tuyển dụng
        </UButton>
      </div>
    </div>
  </div>
</template>
