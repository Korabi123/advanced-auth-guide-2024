import { useSession } from "next-auth/react";

/**
 * 
 * Returns the currently logged in user's role.
 * @type {"ADMIN" | "USER"}
 */

export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user?.role;
}