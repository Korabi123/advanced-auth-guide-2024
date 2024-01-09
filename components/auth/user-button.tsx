"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { AvatarSkeleton } from "./avatar-skeleton";
import { LogoutButton } from "./logout-button";
import { Button } from "@react-email/components";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-none">
        <Avatar>
          <AvatarImage src={user?.image ?? ""} />
          <AvatarFallback className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="center">
        <DropdownMenuLabel>
          <h4 className="font-semibold text-lg tracking-tight">Hello, {user?.name}</h4>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <ExitIcon className="h-4 w-4" />
            <Button className="ml-2">
              Sign Out
            </Button>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}