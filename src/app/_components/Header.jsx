"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-center items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/finance.svg"} alt="logo" width={20} height={20} />
        <span className="text-lime-800 font-bold">FinanSmart</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full">Get started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
