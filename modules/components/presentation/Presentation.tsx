import dynamic from 'next/dynamic';
import Image from 'next/image';

const CountdownTimer = dynamic(() => import('@/modules/components/CountdownTimer/CountdownTimer'), { ssr: false });

export const Presentation = (): JSX.Element => {
    return (
        <section className="flex flex-col">
            <div className="relative w-full pb-[90%]">
                <Image priority
                       src={'images/couple-photo.svg'}
                       alt={'Imagen de Roberto y Lorena posando to rexulones'}

                       fill/>
                <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2">
                    <p className="tracking-widest leading-6 text-sm font-bold py-2">23 / 09 / 23</p>
                    <Image priority
                           src="icons/rings-gold.svg"
                           height={50}
                           width={105}
                           alt="Anillos entrelazados"/>
                </div>
            </div>
            <h1 className="flex flex-col items-center text-5xl font-fantasy pt-[10%]">
                Lorena y Roberto
            </h1>
            <p className="flex flex-col items-center tracking-widest text-sm leading-6 pt-[6%]">
                Nos casamos en...
            </p>
            <div className="border-y-2 border-y-primary-brown mx-6 mt-[6%]">
                <CountdownTimer date={new Date('2023-09-23T12:00:00')}/>
            </div>
            <div className="flex flex-col items-center p-[5%]">
                <button className="flex flex-col items-center tracking-widest text-xs text-white leading-6 p-2 bg-primary-brown">
                    CONFIRMAR ASISTENCIA
                </button>
            </div>
            <div className='flex flex-row justify-between items-center pt-[1%]'>
                <Image src="images/flowers-left.svg"
                       alt="Flores de colores"
                       width={106}
                       height={163}/>
                <Image priority
                       src="icons/scroll-down-icon.svg"
                       height={60}
                       width={60}
                       alt="Flecha hacia abajo indicando continuidad de pagina"/>
                <Image className='ml-3'
                    src="images/flowers-right.svg"
                       alt="Flores de colores"
                       width={88}
                       height={159}/>
            </div>
        </section>
    )
}
