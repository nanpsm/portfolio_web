"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ClickVending() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/vending"); 
        }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

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
        <div className="absolute left-[69px] bottom-[0px] cursor-pointer">
            <Image
                src="/images/vending-machine.png"
                alt="Vending Machine"
                width={1800}
                height={2000}
                priority
                style={{width: "auto", height: "auto"}}
                />
        </div>

        {/* Character */}
        <div className="absolute left-[380px] bottom-[130px] ">
            <Image
                src="/images/girl-side.png"
                alt="Character"
                width={202}
                height={450}
                style={{width: "auto", height: "auto"}}
                />
        </div>

    </main>
  )
}