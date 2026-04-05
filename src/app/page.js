"use client";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();

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
        <div 
          className="absolute left-[69px] bottom-[0px] cursor-pointer"
          onClick={() => router.push("/click-vending")}
        >
          <Image
            src="/images/vending-machine.png"
            alt="Vending Machine"
            width={1800}
            height={2000}
            priority
            style={{width: "auto", height: "auto"}}
          />
        </div>
        
        {/* Cursor */}
        {showCursor && (
          <div className="absolute left-[450px] bottom-[300px] animate-fadeIn">
            <img
              src="/images/cursor.gif"
              alt="cursor"
              className="w-[90px] h-auto"
            />
          </div>
        )}

        {/* Character */}
        <div className="absolute right-[300px] bottom-[130px] ">
          <Image
            src="/images/girl.png"
            alt="Character"
            width={202}
            height={450}
            style={{width: "auto", height: "auto"}}
          />
        </div>

        {/* Speech bubble */}
        <div className="absolute left-[600px] top-[150px] w-[300px]">
          <Image
            src="/images/speech-bubble.png"
            alt="Speech Bubble"
            width={400}
            height={30}
            style={{width: "100%", height: "auto"}}
            loading="eager"
          />

          <div className="absolute inset-0 flex justify-center px-8 text-center text-black pt-[110px]">
            <Typewriter
              texts={[
                "Hi, my name is Nan Phyu Sin Maung.",
                "I’m an AI & Full-stack developer."
              ]}
              className="text-[18px] text-black text-center"
              speed={50}
            />
          </div>
        </div>
        {showCursor && (
          <div className="absolute left-[450px] top-[30px] w-[600px] animate-fadeIn">
            <img
              src="/images/click-vm.png" // your new long bubble
              alt="Instruction"
              className="w-full h-auto"
            />
          </div>
        )}
    </main>
  );
}