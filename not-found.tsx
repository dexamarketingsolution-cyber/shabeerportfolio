import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center">
      <div>
        <p className="font-display text-7xl text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-mist">This page doesn&apos;t exist</h1>
        <p className="mt-2 text-haze">The link may be outdated. Head back to the portfolio home page.</p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
