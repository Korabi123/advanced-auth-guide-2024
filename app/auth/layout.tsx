const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800

  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {children}
    </div>
  );
}
 
export default AuthLayout;