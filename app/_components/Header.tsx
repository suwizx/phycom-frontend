"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import { ChevronsLeftRightEllipsis, Cpu } from "lucide-react";
import Status, { EnumStatus } from "./Status";

export default function Header() {
  return (
    <div className="bg-background py-2 h-16 md:h-20 backdrop-blur sticky border-b border-border flex items-center justify-center">
      <div className="container flex items-center justify-between px-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 h-full w-fit hover:text-primary"
        >
          <Image
            src={Logo}
            quality={100}
            priority
            alt="Logo"
            className="h-8 md:h-full"
          ></Image>
          <div className="hidden lg:flex flex-col justify-center">
            <span className="uppercase font-bold">Helmet Detection System</span>
            <span className="text-sm text-foreground">
              for Automatic Door Access
            </span>
          </div>
        </Link>
        <HeaderStatus />
      </div>
    </div>
  );
}

function HeaderStatus() {
    
  return (
    <div className="flex gap-2 items-center font-mono">
      <div className="border border-border flex gap-2 sm:gap-4 items-center rounded-full p-1 px-2">
        <span className="flex items-center gap-2">
          <ChevronsLeftRightEllipsis />
          <span className="hidden sm:block">Server</span>
        </span>
        <Status status={EnumStatus.SUCCESS} />
      </div>
      <div className="border border-border flex gap-2 sm:gap-4 items-center rounded-full p-1 px-2">
        <span className="flex items-center gap-2">
          <Cpu />
          <span className="hidden sm:block">Hardware</span>
        </span>
        <Status status={EnumStatus.SUCCESS} />
      </div>
    </div>
  );
}
