import { HomePage } from "@/Components/HomeComponents/homePage";
import Nav from "@/Components/PageComponents/topNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2e9d59-ee54-490e-bf96-5497f587844f/dgctdnb-65456fe0-72db-41c6-832a-5b1807d0d68c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85YzJlOWQ1OS1lZTU0LTQ5MGUtYmY5Ni01NDk3ZjU4Nzg0NGYvZGdjdGRuYi02NTQ1NmZlMC03MmRiLTQxYzYtODMyYS01YjE4MDdkMGQ2OGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T6TO433oJdND6zRS8Gl2Rvjc_WLRUDDFOesIpbpsHpo)] bg-cover bg-center bg-no-repeat bg-fixed ">
      <main className="max-w-5xl mx-auto pb-24">
        <HomePage/>
      </main>
    </div>
    </>
  );
}
