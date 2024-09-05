import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#161616]">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white text-center ">Auth</h1>
        <p className="text-lg text-white text-center">A simple authentication service.</p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>Sign In</Button>

          </LoginButton>
        </div>
      </div>
    </main>
  );
}
