"use client";
import Link from "next/link";
import React from "react";
import {
  HomeFillIcon,
  HomeIcon,
  NewFillIcon,
  NewIcon,
  SearchFillIcon,
  SearchIcon,
} from "./ui/icons";

import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log("session:", session);
  return (
    <div className="flex justify-between items-center px-6">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4 ">
          {menu.map(
            (
              { href, icon, clickedIcon } // destructureで直感的に実装
            ) => (
              <li key={href}>
                <Link href={href}>
                  {href === pathName ? clickedIcon : icon}
                </Link>
              </li>
            )
          )}
          {session ? (
            <ColorButton text="Sign Out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign in" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  );
}
