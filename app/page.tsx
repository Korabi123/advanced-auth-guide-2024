import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800

  return (
    <main className="flex relative h-full flex-col items-center bg-slate-950 justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div className="space-y-6 z-10 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service.
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
