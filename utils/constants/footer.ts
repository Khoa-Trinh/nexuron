export default () => {
  return [
    {
      title: "Trang",
      items: [
        { label: "Trang chủ", href: "/" },
        { label: "Đội ngũ", href: "/founder" },
        { label: "Tuyển thành viên", href: "/jobs" },
        { label: "Liên hệ", href: "/contact" },
      ],
    },
    {
      title: "Đội ngũ",
      items: [{ label: "MHP" }, { label: "SnK" }, { label: "David Thái" }],
    },
    {
      title: "Các Ban",
      items: [
        {
          label: "Marketing & Economy",
          href: "/jobs?name=None&subname=Marketing+and+Economy",
        },
        { label: "Cybersecurity", href: "/jobs?name=Cybersecurity" },
        { label: "AI", href: "/jobs?name=AI" },
        { label: "Web", href: "/jobs?name=Web" },
        { label: "App", href: "/jobs?name=App" },
        { label: "Game", href: "/jobs?name=None&subname=Game" },
        {
          label: "Human Resources",
          href: "/jobs?name=None&subname=Human+Resources",
        },
        {
          label: "Competitive Programming",
          href: "/jobs?name=None&subname=Competitive+Programming",
        },
      ],
    },
    {
      title: "Liên hệ",
      items: [
        {
          label: "Facebook",
          href: "https://facebook.com/py.hacker.hieu",
          external: true,
        },
        { label: "GitHub", href: "https://github.com/MHP0920", external: true },
        {
          label: "Discord",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          external: true,
        },
      ],
    },
  ];
};
