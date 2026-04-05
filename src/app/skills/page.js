"use client";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Vending() {
    const router = useRouter();
    
    return (
        <main className="relative w-screen h-screen bg-white">
            {/* Title */}
            <div
                className="absolute top-[60px] left-1/2 -translate-x-1/2"
                style={{ fontFamily: "var(--font-pixel)" }}
            >
                <Typewriter
                    texts={["Take Your Receipt."]}
                    className="text-6xl text-black text-center"
                    speed={50}
                />
            </div>

            {/* Vending Machine */}
            <div className="absolute left-[290px] top-[150px]">
                <Image
                    src="/images/vm.png"
                    width={900}
                    height={700}
                    alt="vm"
                />
            </div>

            {/* Skills */}
            <div
                className="absolute top-[230px] left-[446px] cursor-pointer"
            >
                <img 
                    src="/images/cookie.png" 
                    className="w-[80px]"
                />
            </div>

            {/* Projects*/}
            <div
                className="absolute top-[180px] left-[690px] cursor-pointer"
            >
                <img 
                    src="/images/candy.png" 
                    className="w-[100px]"
                />
            </div>

            {/* Contact */}
            <div
                className="absolute top-[220px] left-[915px] cursor-pointer"
            >
                <img 
                    src="/images/milk.png" 
                    className="w-[100px]"
                />
            </div>

            {/* Quit */}
            <div
                className="absolute top-[380px] left-[446px] cursor-pointer"
            >
                <img 
                    src="/images/soda.png" 
                    className="w-[75px]"
                />
            </div>

            {/* Receipt */}
            <div
                className="absolute top-[668px] left-[1100px] cursor-pointer"
                onClick={() => {
                setTimeout(() => {
                    router.push("/receipt");
                }, 200);
                }}
            >
                <img 
                    src="/images/receipt.png" 
                    className="w-[70px] hover:scale-110 transition"
                />
            </div>

        </main>
    )
}