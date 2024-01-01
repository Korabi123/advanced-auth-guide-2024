import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <div className="font-semibold text-center text-6xl">Hello Settings</div>
      <hr className="my-4" />
      <div className="font-semibold text-2xl">Session: <br /> {JSON.stringify(session)}</div>
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <Button type="submit" size={"lg"} className="mt-4">
          Sign Out
        </Button>
      </form>
    </>
  );
}
 
export default SettingsPage;