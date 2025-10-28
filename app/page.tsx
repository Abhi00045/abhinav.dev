import { HomePage } from "@/Components/HomeComponents/homePage";
import Nav from "@/Components/PageComponents/topNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-[url(https://cdn.wallpapersafari.com/87/23/X3lUA5.jpg)] bg-cover bg-center bg-no-repeat bg-fixed ">
      <main className="max-w-5xl mx-auto pb-24">
        <HomePage/>
      </main>
    </div>
    </>
  );
}
