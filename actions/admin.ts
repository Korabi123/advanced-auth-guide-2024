"use server";

import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";

export const admin = async () => {
  const role = await currentRole();

  if (role !== "ADMIN") {
    return { error: "Forbidden" }
  }

  return { success: "Success!" }
}