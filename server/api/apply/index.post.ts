import { rewriteJobId, rewriteRole } from "~/utils";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUrl = config.apiUrl;
  const { jobId, role } = getQuery(event);
  if (!jobId || !role) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing jobId or role",
    });
  }

  const reqUrl = `${apiUrl}/api/v1/apply/nexuron/${rewriteJobId(
    jobId as string
  )}/${rewriteRole(role as string)}/`;

  const body = await readBody(event);

  try {
    const response = await $fetch(reqUrl, {
      method: "POST",
      body,
    });
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const statusCode = error.response?.status || 500;
    const message = error.response?._data?.msg || "Internal Server Error";
    setResponseStatus(event, statusCode);
    return { status: statusCode, message };
  }
});
