export default (): TypesConfigsField<SchemasEmailToken>[] => {
  return [
    {
      name: "token",
      label: "Mã xác thực",
      block: "input",
      type: "text",
      required: true,
      help: "Vui lòng nhập mã xác thực đã gửi đến email của bạn",
    },
  ];
};
