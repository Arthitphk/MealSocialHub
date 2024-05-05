
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <button class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
        hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300  focus:bg-transparent">
        <Link href="/feed">Feed Pages Here!</Link>
      </button>

      <button class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
        hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300  focus:bg-transparent">
        <Link href="/profile">Profile Pages Here!</Link>
      </button>

      <button class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
        hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300  focus:bg-transparent">
        <Link href="/chat">Chat Pages Here!</Link>
      </button>
    </main>
  );
}







