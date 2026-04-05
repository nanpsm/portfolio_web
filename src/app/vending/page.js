"use client";

import Typewriter from "@/components/Typewriter";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
                    texts={["Choose Your Snack."]}
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
                onClick={() => {
                setTimeout(() => {
                    router.push("/skills");
                }, 200);
                }}
            >
                <img 
                    src="/images/cookie.png" 
                    className="w-[80px] hover:scale-110 transition"
                />
            </div>

            {/* Projects*/}
            <div
                className="absolute top-[180px] left-[690px] cursor-pointer"
                onClick={() => {
                setTimeout(() => {
                    router.push("/projects");
                }, 200);
                }}
            >
                <img 
                    src="/images/candy.png" 
                    className="w-[100px] hover:scale-110 transition"
                />
            </div>

            {/* Contact */}
            <div
                className="absolute top-[220px] left-[915px] cursor-pointer"
                onClick={() => {
                setTimeout(() => {
                    router.push("/contact");
                }, 200);
                }}
            >
                <img 
                    src="/images/milk.png" 
                    className="w-[100px] hover:scale-110 transition"
                />
            </div>

            {/* Quit */}
            <div
                className="absolute top-[380px] left-[446px] cursor-pointer"
                onClick={() => {
                setTimeout(() => {
                    router.push("/quit");
                }, 200);
                }}
            >
                <img 
                    src="/images/soda.png" 
                    className="w-[75px] hover:scale-110 transition"
                />
            </div>

        </main>
    )
}