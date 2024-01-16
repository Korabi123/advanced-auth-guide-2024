const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex overflow-x-hidden flex-col gap-y-10 items-center justify-center relative bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {children}
    </div>
  );
}
 
export default ProtectedLayout;