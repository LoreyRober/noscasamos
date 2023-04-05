import { useState } from 'react'
import Image from 'next/image'

export const NavigationHeader = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed z-10 w-full top-0 flex flex-row justify-between bg-black text-white pl-6 py-4">
            <h1 className="flex font-normal text-sm leading-6">
                <span className="pr-2">LORENA</span>
                <Image priority
                       src="icons/rings-white.svg"
                       height={24}
                       width={50}
                       alt="Anillos entrelazados"/>
                <span className="pl-2">ROBERTO</span>
            </h1>
            <div className="flex flex-col w-3/5 items-end relative justify-end">
                <button className="mr-6"
                        onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <Image priority
                               src="icons/icon_close.svg"
                               height={24}
                               width={24}
                               alt="Anillos entrelazados"/> :
                        <Image priority
                               src="icons/burger-menu.svg"
                               height={24}
                               width={24}
                               alt="Anillos entrelazados"/>

                    }
                </button>
                <nav className={
                    isOpen ?
                        'fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-out' :
                        'fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-in scale-x-0 translate-x-full'}>
                    <ul className="flex flex-col tracking-widest font-bold text-sm leading-6 px-4 py-6">
                        ¡BIENVENIDOS!
                    </ul>
                    <ul className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                        SOBRE NOSOTROS
                    </ul>
                    <ul className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                        CONFIRMAR ASISTENCIA
                    </ul>
                    <ul className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                        PIDE TUS TEMAZOS
                    </ul>
                    <ul className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                        COMPARTE TUS FOTOS
                    </ul>
                </nav>
            </div>
        </header>
    )
}
