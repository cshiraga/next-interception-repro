import Link from "next/link";

export default function OtherPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Other Page</h1>
      <p className="text-zinc-500">
        Navigate back to Home from here, then try Login again.
      </p>
      <Link
        href="/"
        className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
