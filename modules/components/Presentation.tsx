import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@react-hook/media-query';

const CountdownTimer = dynamic(() => import('@/modules/components/CountdownTimer'), { ssr: false });

export const Presentation = (): JSX.Element => {
    const isMobile = useMediaQuery("(max-width: 1023px)");

    return (
        <section className="flex flex-col lg:items-center lg:flex-row w-full">
            <div className="relative w-full pb-[100%] mt-6 lg:flex-col lg:mt-12 lg:pb-[95%]">
            { isMobile ? (

                    <Image priority
                           src={'/images/couple-image.svg'}
                           alt={'Imagen de Roberto y Lorena posando to rexulones'}
                           style={{ objectFit: 'cover' }}
                           fill
                           />
            ) : (

                    <Image priority
                           src={'/images/couple-image-large.svg'}
                           alt={'Imagen de Roberto y Lorena posando to rexulones'}
                           style={{ objectFit: 'cover' }}
                           fill/>
                )}
            </div>
            <div className='w-full bg-white lg:py-[219px] lg:bg-white-with-opacity'>
                <div className="relative lg:static lg:flex-col">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[-90px]
                    lg:static lg:-translate-x-0 lg:flex lg:justify-center">
                        {isMobile ? (
                            <Image priority
                                   src="/images/date-rings.svg"
                                   height={180}
                                   width={180}
                                   alt="Anillos entrelazados"/>
                        ) : (
                            <Image priority
                                   src="/images/date-rings-large.svg"
                                   height={108}
                                   width={150}
                                   alt="Anillos entrelazados"/>
                        )}
                    </div>
                </div>
                <div className="relative lg:static lg:flex-col ">
                    <h1 className="flex flex-col items-center text-5xl font-fantasy pt-8 z-10 lg:pt-16 lg:text-6xl">
                        Lorena y Roberto
                    </h1>
                    <p className="flex flex-col items-center tracking-widest text-sm leading-6 pt-8 lg:pt-24 lg:text-xl">
                        Nos casamos en...
                    </p>
                    <div className="border-y-2 border-y-primary-brown mx-6 mt-4 lg:mt-6 lg:mx-16">
                        <CountdownTimer date={new Date('2023-09-23T12:30:00')}/>
                    </div>
                    <div className="flex flex-col items-center p-10 relative lg:pt-12">
                        <Link href="/confirmation" className="flex flex-col items-center tracking-widest text-sm text-white leading-6 p-4 bg-primary-brown">
                            CONFIRMAR ASISTENCIA
                        </Link>
                        {isMobile && (
                        <div className="flex flex-row justify-between items-center absolute w-full">
                            <Image src="/images/flowers-left.svg"
                                   alt="Flores de colores"
                                   width={106}
                                   height={163}/>
                            <Image src="/images/flowers-right.svg"
                                 alt="Flores de colores"
                                 width={88}
                                 height={159}/>
                        </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
}
