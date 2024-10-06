import { BackgroundBeamsWithCollisionDemo } from "@/components/Background";
import MainPage from "@/components/MainPage";
import { Main } from "next/document";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark">
      <BackgroundBeamsWithCollisionDemo/>
    </div>
  );
}
