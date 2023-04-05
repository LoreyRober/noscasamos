import dynamic from 'next/dynamic';
import Image from 'next/image';

const CountdownTimer = dynamic(() => import('@/modules/components/CountdownTimer/CountdownTimer'), { ssr: false });

export const Presentation = (): JSX.Element => {
    return (
        <section className="flex flex-col">
            <div className="relative w-full pb-[100%] mt-6">
                <Image priority
                       src={'images/couple-photo.svg'}
                       alt={'Imagen de Roberto y Lorena posando to rexulones'}
                       objectFit={'cover'}
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
            <h1 className="flex flex-col items-center text-5xl font-fantasy pt-8">
                Lorena y Roberto
            </h1>
            <p className="flex flex-col items-center tracking-widest text-sm leading-6 pt-8">
                Nos casamos en...
            </p>
            <div className="border-y-2 border-y-primary-brown mx-6 mt-4">
                <CountdownTimer date={new Date('2023-09-23T12:30:00')}/>
            </div>
            <div className="flex flex-col items-center p-10 relative">
                <button className="flex flex-col items-center tracking-widest text-sm text-white leading-6 p-4 bg-primary-brown">
                    CONFIRMAR ASISTENCIA
                </button>
                <div className='flex flex-row justify-between items-center absolute w-full'>
                    <Image src="images/flowers-left.svg"
                           alt="Flores de colores"
                           width={106}
                           height={163}/>
                    <Image src="images/flowers-right.svg"
                           alt="Flores de colores"
                           width={88}
                           height={159}/>
                </div>
            </div>
            <div className="flex flex-col items-center p-6 mt-4">
                <h3 className="tracking-widest leading-6">
                    ¡Bienvenidos a nuestra boda!
                </h3>
                <p className="tracking-widest text-sm leading-6 pt-4">
                    ¡Que sí! ¡Que nos casamos!
                </p>
                <p className="tracking-widest text-sm leading-6 pt-4 text-center">
                    En el año en el que cumplimos una quincena juntos hemos decidido que por fin ha llegado el momento. Y mientras que llega el gran día hemos preparado esta web para que estés al día de todo, nos confirmes tu asistencia o, incluso puedas sugerirnos tus temazos favoritos para la fiesta.
                </p>
            </div>
        </section>
    )
}
