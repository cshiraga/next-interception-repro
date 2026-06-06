"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold">Interception Repro</h1>
        <p className="text-zinc-500 text-center max-w-md">
          Click Login to see the modal. Then visit /login directly, go back, and
          try Login again.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Login (router.push)
          </button>
          <Link
            href="/other"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium hover:bg-zinc-100"
          >
            Other Page
          </Link>
        </div>
      </main>
    </div>
  );
}
