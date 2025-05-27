export default (): TypesConfigsField<SchemasDetailEntry>[] => {
  return [
    {
      name: "plan_in_the_next_12_months",
      label: "Kế hoạch trong 12 tháng tới",
      block: "textarea",
      required: true,
      help: "Vui lòng viết ít nhất 50 ký tự và tối đa 200 ký tự",
    },
    {
      name: "how_do_people_think_about_you",
      label: "Mọi người nghĩ gì về bạn",
      block: "textarea",
      required: true,
      help: "Vui lòng viết ít nhất 50 ký tự và tối đa 200 ký tự",
    },
    {
      name: "specialized_answer",
      label: "Câu hỏi chuyên môn",
      block: "textarea",
      required: true,
      help: "Vui lòng viết ít nhất 50 ký tự và tối đa 200 ký tự",
    },
    {
      name: "portfolio_link",
      label: "Link portfolio",
      block: "input",
      type: "url",
      required: true,
      help: "Vui lòng nhập một liên kết Google Drive hợp lệ",
    },
    {
      name: "link_CV_resume",
      label: "Link CV/Resume",
      block: "input",
      type: "url",
      required: true,
      help: "Vui lòng nhập một liên kết Google Drive hợp lệ",
    },
  ];
};
