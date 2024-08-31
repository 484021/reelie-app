import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <p className="mb-5">reelie App</p>
      <div className="flex gap-5">
        <Button asChild>
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
        <UserButton />
      </div>
    </main>
  );
}
