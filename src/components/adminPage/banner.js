import React from "react";
import Particles from "@/components/particles";
import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from "next/link";

export default function Banner() {
    return (
        <div className="bg-midnight-black">
            <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl">
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />
                <h1 className="mb-32 z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text">
                    Welcome Admins
                </h1>

                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>

            <div className="text-white absolute bottom-0 left-0 grid grid-cols-1 m-4 md:grid-cols-3 w-[calc(100%-2em)] bg-eazy-faded cursor-pointer">
                <Link href={"/admin/add"}>
                    <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.5)]">
                        <div className="p-2 transition-all rounded-md mx-2">
                            <AddHomeRoundedIcon style={{ fontSize: 56 }} />
                        </div>
                        <h3 className="font-headings text-2xl my-4">Add Property</h3>
                    </div>
                </Link>
                <Link href={"/admin/add"}>
                    <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.5)]">
                        <div className="p-2 transition-all rounded-md mx-2">
                            <BorderColorRoundedIcon style={{ fontSize: 56 }} />
                        </div>
                        <h3 className="font-headings text-2xl my-4">Modify Property</h3>
                    </div>
                </Link>
                <Link href={"/admin/add"}>
                    <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.5)]">
                        <div className="p-2 transition-all rounded-md mx-2">
                            <SettingsRoundedIcon style={{ fontSize: 56 }} />
                        </div>
                        <h3 className="font-headings text-2xl my-4">Other Settings</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}
