import Link from "next/link";
import { Reveal } from "../Reveal";


export function CtaDark() {
    return (
        <div className="px-6 my-20 md:mt-36">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-3xl font-bold"><span className="block degradedBlue bg-blueLight">Únete</span> a la comunidad</h3>
                        </Reveal>
                        <Reveal>
                            <p>Te regalamos una tarjeta de regalo con valor de 20$.</p>
                        </Reveal>
                    </div>

                    <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
                        <Reveal>
                            Aprovecha ahora
                        </Reveal>
                    </Link>
                </div>
            </div>
        </div>
    )
}
