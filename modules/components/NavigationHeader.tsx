import { useMediaQuery } from '@react-hook/media-query';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

export const NavigationHeader = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 1023px)");

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    }

    useEffect(() => {
        if (!isOpen) return;

        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);

    }, [isOpen]);

    return (
        <header className="fixed z-20 w-full top-0 flex flex-row justify-center bg-black text-white pl-6 py-4 lg:px-20">
            <div className="flex w-full flex-row justify-between max-w-5xl">
                <h1>
                    <Link href="/" className="flex font-normal text-sm leading-6">
                        <span className="pr-2">LORENA</span>
                        <Image priority
                               src="icons/rings-white.svg"
                               height={24}
                               width={50}
                               alt="Anillos entrelazados"/>
                        <span className="pl-2">ROBERTO</span>
                    </Link>
                </h1>
                { isMobile ? (
                        <div ref={dropdownRef}
                             className="flex flex-col w-3/5 items-end relative justify-end">
                            <button className="mr-6"
                                    onClick={handleClick}
                                    disabled={isAnimating}>
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
                                <div className="flex flex-col tracking-widest font-bold text-sm leading-6 px-4 py-6">
                                    <Link href="/">¡BIENVENIDOS!</Link>
                                </div>
                                <div className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                                    <Link href="">SOBRE NOSOTROS</Link>
                                </div>
                                <div className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                                    <Link href="/confirmation">CONFIRMAR ASISTENCIA</Link>
                                </div>
                                <div className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">
                                    <Link href="">PIDE TUS TEMAZOS</Link>
                                </div>
                                {/*<div className="flex flex-col tracking-widest text-sm leading-6 px-4 py-3">*/}
                                {/*    <Link href="">COMPARTE TUS FOTOS</Link>*/}
                                {/*</div>*/}
                            </nav>
                        </div>
                    ) :
                    (
                        <nav className="flex space-x-6 leading-6 text-sm text-white">
                                <Link href="/" className="font-bold">¡BIENVENIDOS!</Link>
                                <Link href="">SOBRE NOSOTROS</Link>
                                <Link href="/confirmation">CONFIRMAR ASISTENCIA</Link>
                                <Link href="">PIDE TUS TEMAZOS</Link>
                                {/*<Link href="">COMPARTE TUS FOTOS</Link>*/}
                        </nav>
                    )}
            </div>
        </header>
    )
}