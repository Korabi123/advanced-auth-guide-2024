import { useSession } from "next-auth/react";

/**
 * 
 * Returns the currently logged in user's session, or null if not logged in.
 */

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
}