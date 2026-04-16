import Image from "next/image";
import HomeComponent from "@/components/Home";

export default function Landing() {
  return (
    <div className="size-full h-screen flex flex-col items-center justify-center gap-8 bg-slate-200 p-4">
      <HomeComponent />
    </div>
  );
}
