import Image from "next/image";
import TailwindButton from "@/src/components/button/TailwindButton/TailwindButton";

export default function TailwindBanner({ heading }) {
  return (
    <div className="bg-black/70 py-[30vw] relative overflow-hidden flex items-center justify-center text-white">
      <Image
        src={`https://images.ctfassets.net/xny2w179f4ki/3Q3Oe6wapZAsuMHmNxdzdY/087e942f34705a664a9db4e3a0721f1e/landing-banner-background-2.webp?fm=webp`}
        className="object-cover"
        fill
        alt="background"
      />
      
      <div className="relative z-10 w-10/12 md:w-7/12 lg:w-1/2 xl:w-[600px] flex flex-wrap justify-center">
        <h2 className="font-bold text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[64px] leading-none text-center w-full mb-5">{heading}</h2>

        <TailwindButton intent="primary">Start a free trial</TailwindButton>
      </div>
    </div>
  )
}