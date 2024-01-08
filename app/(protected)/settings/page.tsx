"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button size={"lg"} onClick={() => signOut()} className="mt-4">
        Sign Out
      </Button>
    </div>
  );
}
 
export default SettingsPage;