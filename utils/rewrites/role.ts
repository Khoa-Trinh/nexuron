export default (role: string) => {
  switch (role) {
    case "member":
      return "Member";
    case "vice":
      return "Vice-Head";
    case "head":
      return "Head";
    default:
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid role",
      });
  }
};
