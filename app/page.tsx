import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js Counter App</h1>
      <Link href="/counter" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Go to Counter
      </Link>
    </main>
  );
}
