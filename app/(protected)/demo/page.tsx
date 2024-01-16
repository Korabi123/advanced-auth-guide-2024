import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServerPage from "../server/page";
import ClientPage from "../client/page";
import AdminPage from "../admin/page";
import SettingsPage from "../settings/page";
import { UserButton } from "@/components/auth/user-button";

const DemoPage = () => {
  return (
    <Tabs defaultValue="settings" className="w-[600px] demo-tab">
      <TabsList className="flex justify-between w-full">
        <div className="grid grid-cols-4 w-[60%]">
          <TabsTrigger value="server">Server</TabsTrigger>
          <TabsTrigger value="client">Client</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </div>
        <UserButton />
      </TabsList>
      <div>
        <TabsContent value="server">
          <ServerPage />
        </TabsContent>
        <TabsContent value="client">
          <ClientPage />
        </TabsContent>
        <TabsContent value="admin">
          <AdminPage />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsPage />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default DemoPage;
