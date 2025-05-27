export default (type: "normal" | "partner") => {
  switch (type) {
    case "normal":
      return [
        {
          name: "Facebook",
          url: "https://facebook.com/py.hacker.hieu",
          icon: "i-fa-brands:facebook",
        },
        {
          name: "GitHub",
          url: "https://github.com/MHP0920",
          icon: "i-fa-brands:github",
        },
        {
          name: "Discord (Group kín Tin-LN i2427)",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          icon: "i-fa-brands:discord",
        },
      ];
      break;
    case "partner":
      return [
        {
          name: "Facebook",
          url: "https://facebook.com/py.hacker.hieu",
          icon: "i-fa-brands:facebook",
        },
        {
          name: "GitHub",
          url: "https://github.com/MHP-Team",
          icon: "i-fa-brands:github",
        },
        {
          name: "Discord",
          url: "https://discord.gg/36FhTCvne9",
          icon: "i-fa-brands:discord",
        },
      ];
      break;
  }
};
