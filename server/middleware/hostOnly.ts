export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const allowed = config.allowedHosts
    .split(",")
    .map((h: string) => h.trim().replace(/\/$/, ""));

  const incoming = event.node.req.headers.host;

  if (!incoming || !allowed.includes(incoming)) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
      message: `Host ${incoming} is not allowed`,
    });
  }
});
