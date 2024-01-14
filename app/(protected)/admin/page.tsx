"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const AdminPage = () => {

  const onServerActionClick = () => {
    admin()
      .then((response) => {
        if (response.success) {
          toast.success("Allowed Server Action!")
        } else {
          toast.error("Forbidden");
        }
      })
  }

  const onApiClick = () => {
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!")
        } else {
          toast.error("Forbidden");
        }
      })
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 mt-4">
        <RoleGate allowedRole="ADMIN">
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-only API Route
          </p>
          <Button onClick={onApiClick}>
            Click to Test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-only Server Action
          </p>
          <Button onClick={onServerActionClick}>
            Click to Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
 
export default AdminPage;