"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) => {
  const pathName = usePathname();
  const isActive = slug === pathName;

  return (
    <Link href={slug} className={isActive ? "activeNavLinkBtn" : "navLinkBtn"}>
      {children}
    </Link>
  );
};

export default Navlink;
