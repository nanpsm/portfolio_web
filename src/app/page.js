import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
    
      {/* Background */}
      <Image
        src="/images/meadow-bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
       />

        {/* Vending machine */}
        <div className="absolute left-[69px] bottom-[0px] ">
          <Image
            src="/images/vending-machine.png"
            alt="Vending Machine"
            width={584}
            height={700}
          />
        </div>

        {/* Character */}
        <div className="absolute right-[300px] bottom-[130px] ">
          <Image
            src="/images/girl.png"
            alt="Character"
            width={202}
            height={450}
          />
        </div>

        {/* Speech bubble */}
        <div className="absolute left-[250px] top-[60px] w-[400px]">
          <Image
            src="/images/speech-bubble.png"
            alt="Speech Bubble"
            width={400}
            height={70}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-[14px] text-black font-medium">
            <Typewriter
              text="Hello, my name is Nan Phyu Sin Maung."
              className="text-[15px] text-black text-center"
              speed={50}
            />
          </div>
        </div>
    </main>
  );
}