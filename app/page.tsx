import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-5xl font-sans">This is my First Nextjs App</h1>
      <div className="flex items-center gap-4">
        <p className="text-sm text-semibold">Powered by</p>
        <Image
          src={"/vercel.svg"}
          alt="vercel logo"
          className="dark:invert"
          width={200}
          height={24}
        />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-xl text-semibold">in association with</p>
        <Image
          src={"/next.svg"}
          alt="nextjs logo"
          className="dark:invert"
          width={400}
          height={34}
          priority
        />
      </div>
    </main>
  );
}
