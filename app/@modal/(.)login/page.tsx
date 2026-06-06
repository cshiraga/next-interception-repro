import Link from "next/link";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm rounded-xl border bg-white p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-800 text-xl leading-none"
          >
            ✕
          </Link>
        </div>
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
          <Link href="/login" className="underline hover:text-zinc-800">
            Open as full page instead
          </Link>
        </div>
      </div>
    </div>
  );
}
