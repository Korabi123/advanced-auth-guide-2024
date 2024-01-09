import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="sm:w-[600px] w-full">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          {label}
        </p>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 mt-4">
        <div className="flex flex-row items-center justify-between rounded-lg">
          <p className="text-sm font-medium">
            ID
          </p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-200 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg">
          <p className="text-sm font-medium">
            Name
          </p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-200 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg">
          <p className="text-sm font-medium">
            Email
          </p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-200 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg">
          <p className="text-sm font-medium">
            Role
          </p>
          {user?.role === "USER" && (
            <Badge>User</Badge>
          )}
          {user?.role === "ADMIN" && (
            <Badge variant={"special"}>Admin</Badge>
          )}
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg">
          <p className="text-sm font-medium">
            Two Factor Authentication
          </p>
          <Badge variant={user?.isTwoFactorEnabled ?  "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}