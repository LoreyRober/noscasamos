import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

export const NavigationHeader = (): JSX.Element => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const hasArrivedToMaxWith = useMediaQuery("(max-width: 1023px)");

    const handleClick = (event: SyntheticEvent) => {
        setIsOpen(!isOpen);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    }

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith])

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
                    <Link href="/" className="flex font-normal  leading-6">
                        <span className="pr-2">LORENA</span>
                        <Image
                               src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}icons/rings-white.svg`}
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
                                    <Image
                                           src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}icons/icon_close.svg`}
                                           height={24}
                                           width={25}
                                           alt="Anillos entrelazados"/> :
                                    <Image
                                           src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}icons/burger-menu.svg`}
                                           height={24}
                                           width={25}
                                           alt="Anillos entrelazados"/>

                                }
                            </button>
                            <nav className={
                                isOpen ?
                                    'fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-out' :
                                    'fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-in scale-x-0 translate-x-full'}>
                                <div className={`flex flex-col tracking-widest  leading-6 px-4 pt-10 ${router.pathname === '/' && 'font-bold underline'}`}>
                                    <Link href="/">¡BIENVENIDOS!</Link>
                                </div>
                                <div className={`flex flex-col tracking-widest  leading-6 px-4 pt-6 ${router.pathname === '/about-us' && 'font-bold underline'}`}>
                                    <Link href="/#about-us" onClick={handleClick}>SOBRE NOSOTROS</Link>
                                </div>
                                <div className={`flex flex-col tracking-widest  leading-6 px-4 pt-6 ${router.pathname === '/confirmation' && 'font-bold underline'}`}>
                                    <Link href="/confirmation">CONFIRMAR ASISTENCIA</Link>
                                </div>
                                <div className={`flex flex-col tracking-widest  leading-6 px-4 pt-6 ${router.pathname === '/songs' && 'font-bold underline'}`}>
                                    <Link href="/songs">PIDE TUS TEMAZOS</Link>
                                </div>
                                {/*<div className={`flex flex-col tracking-widest  leading-6 px-4 pt-6 ${router.pathname === '/songs' && 'font-bold underline'}`>*/}
                                {/*    <Link href="">COMPARTE TUS FOTOS</Link>*/}
                                {/*</div>*/}
                            </nav>
                        </div>
                    ) :
                    (
                        <nav className="flex space-x-6 leading-6  text-white">
                                <Link href="/" className={`${router.pathname === '/' && 'font-bold underline'}`}>¡BIENVENIDOS!</Link>
                                <Link href="/#about-us" className={`${router.pathname === '/about-us' && 'font-bold underline'}`}>SOBRE NOSOTROS</Link>
                                <Link href="/confirmation" className={`${router.pathname === '/confirmation' && 'font-bold underline'}`}>CONFIRMAR ASISTENCIA</Link>
                                <Link href="/songs" className={`${router.pathname === '/songs' && 'font-bold underline'}`}>PIDE TUS TEMAZOS</Link>
                                {/*<Link href="">COMPARTE TUS FOTOS</Link>*/}
                        </nav>
                    )}
            </div>
        </header>
    )
}
