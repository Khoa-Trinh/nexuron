export default (): TypesConfigsField<SchemasInfo>[] => {
  return [
    {
      name: "fullname",
      label: "Họ tên",
      block: "input",
      type: "text",
      required: true,
      help: "Nhập họ tên đầy đủ",
    },
    {
      name: "email",
      label: "Địa chỉ Email",
      block: "input",
      type: "email",
      required: true,
      help: "Đuôi của email phải là @ptnk.edu.vn",
    },
    {
      name: "phone",
      label: "Số điện thoại",
      block: "input",
      type: "tel",
      required: true,
      help: "Số điện thoại phải bắt đầu bằng 0 và chỉ chứa số",
    },
    {
      name: "github",
      label: "GitHub",
      block: "input",
      type: "url",
      required: true,
      help: "Vui lòng nhập một liên kết GitHub hợp lệ",
    },
    {
      name: "facebook",
      label: "Facebook",
      block: "input",
      type: "url",
      required: true,
      help: "Vui lòng nhập một liên kết Facebook hợp lệ",
    },
  ];
};
