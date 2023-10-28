"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export function ControlBilling() {
    return (
        <div className="p-4 py-20 md:py-64">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/selfie.png" alt="Control Business" width="580" height={411} className="w-full h-auto" />
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Sube tu outfit!<br /><span className="block degradedBlue bg-blueLight"><b>Conecta</b> con gente.</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Tenemos un blog interno donde puedes postear tus outfits favoritos! 
                        <br></br><br></br>Sigue a más gente con tus mismos gustos.
                            Cada día somos más.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
