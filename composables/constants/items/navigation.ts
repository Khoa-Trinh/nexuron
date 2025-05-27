import type { NavigationMenuItem } from "@nuxt/ui";

export const useNavigation = () => {
  const route = useRoute();

  const childrenItems = computed(() => {
    const seen = new Set<string>();
    return team()
      .map((str) => {
        const label = str.name === "None" ? str.subName : str.name;

        const to = {
          path: "/jobs",
          query:
            str.name === "None"
              ? { name: "None", subname: str.subName }
              : { name: str.name },
        };

        const active =
          route.path === "/jobs" &&
          String(route.query.name) === str.name &&
          (str.name === "None"
            ? String(route.query.subname) === str.subName
            : true);

        return {
          label,
          icon: str.icon,
          to,
          description: str.navDescription,
          active,
        };
      })
      .filter((item) => {
        if (seen.has(item.label)) return false;
        seen.add(item.label);
        return true;
      });
  });

  return computed<NavigationMenuItem[]>(() => [
    { label: "Trang chủ", icon: "i-lucide-home", to: "/" },
    {
      label: "Đội ngũ",
      icon: "i-lucide-user",
      to: "/founder",
    },
    {
      label: "Tuyển thành viên",
      icon: "i-lucide-users",
      to: "/jobs",
      children: childrenItems.value,
    },
    { label: "Liên hệ", icon: "i-lucide-mail", to: "/contact" },
    { label: "Nhật ký thay đổi", icon: "i-lucide-file-clock", to: "/changelog" },
  ]);
};
