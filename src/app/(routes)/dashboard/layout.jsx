"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { db } from "../../../../utils/dbConfig";
import { Budgets } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  const checkUserBudgets = async () => {
    const result = await db.select
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) {
      router.replace("/dashboard/budgets");
    }
  };

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
