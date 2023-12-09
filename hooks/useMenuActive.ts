import { usePathname, useRouter } from "next/navigation";

const useMenuActive = (route: any) => {
  const router = useRouter();
  const path = usePathname();

  const isActive = (path.includes(route) && route.length > 1) || path === route;
  return isActive;
};

export default useMenuActive;
