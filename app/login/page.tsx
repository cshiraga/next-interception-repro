import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Login (Full Page)</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-zinc-500">
          <Link href="/" className="underline hover:text-zinc-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
