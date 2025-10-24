import Nav from "@/Components/PageComponents/topNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 p-5">
      <main className="max-w-5xl mx-auto pb-24 bg-white dark:bg-black transition-colors duration-300 m-1.5">
        <Nav/>
      </main>
    </div>
    </>
  );
}
