"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import CardInfo from "./_components/CardInfo";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName}</h2>
      <p className="text-gray-500">
        Here's what's going on with your finances—let's take control of your
        expenses!
      </p>

      <CardInfo />
    </div>
  );
}

export default Dashboard;
