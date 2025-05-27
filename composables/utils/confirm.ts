type Confirm = {
  title?: string;
  description?: string;
  timeout?: number;
};

export const useConfirm = (modalOpen: Ref<boolean>, opts: Confirm = {}) => {
  const askedOnce = ref(false);
  const toast = useToast();

  const {
    title = "Bạn chắc chắn muốn đóng? (click 1 lần nữa để xác nhận đóng)",
    description = "Thông tin bạn đã nhập sẽ bị mất.",
    timeout = 8000,
  } = opts;

  function guard(nextOpen: boolean) {
    if (nextOpen) {
      askedOnce.value = false;
      modalOpen.value = true;
      return;
    }

    if (!askedOnce.value) {
      askedOnce.value = true;
      toast.add({ title, description, duration: timeout, color: "warning" });

      modalOpen.value = true;
      return;
    }

    toast.clear();
    modalOpen.value = false;
  }

  watchEffect(() => {
    if (!modalOpen.value) askedOnce.value = false;
  });

  return { guard };
};
