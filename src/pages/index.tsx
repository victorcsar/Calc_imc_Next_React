import Image from "next/image";
import { Inter } from "next/font/google";
import Calcimc from "./calcimc/Calcimc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='flex w-[100%] h-screen justify-start items-start p-5'>
      <Calcimc/>
    </div>
  );
}
