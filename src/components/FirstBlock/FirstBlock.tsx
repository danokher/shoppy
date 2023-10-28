"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Shoppy 👒
                            <span className="block degradedBlue bg-blueLight">
                                 ropa online
                            </span>
                            de temporada
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10"><b>50%</b> de descuento hasta final de mes utilizando la aplicación.<br></br><br></br>
                        Además otro <b>5%</b> más de descuento por cada persona que se instale la app con el código de enlace.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Bájate la App</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/modelos.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
