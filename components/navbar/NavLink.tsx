"use client";

import useMessageStore from "@/hooks/useMessageStore";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
};

function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const { unreadCount } = useMessageStore((state) => ({
    unreadCount: state.unreadCount,
  }));

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      <span>{label}</span>
      {href === "/messages" && <span className="ml-1">({unreadCount})</span>}
    </NavbarItem>
  );
}

export default NavLink;
