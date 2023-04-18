import HistoryLineSegment from '@/modules/components/HistoryLineSegment';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center pt-10'>
            <h3 id='about-us' className='tracking-widest text-xl font-bold'>¿Conoces nuestra historia?</h3>
            <div className="relative">
                <div className="flex flex-col justify-center items-center w-full bg-white pt-4">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/hearth-with-leafs.svg`}
                           height={55}
                           width={190}
                           alt=""/>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[73px]">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/arrow-hearth.svg`}
                           height={26}
                           width={24}
                           alt=""/>
                </div>
            </div>
            <div className="m-auto bg-white">
                <div className="w-[330px] m-auto lg:w-[400px]">
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/meet.svg`}
                                        imageAlt={'Nosotros de jovenes'}
                                        text={'NOS CONOCEMOS'}
                                        date={'ABRIL 2008'}
                                        textPosition={'left'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/first-kiss.svg`}
                                        imageAlt={'Nosotros dandonos nuestro primer beso'}
                                        text={'PRIMER BESO'}
                                        date={'ABRIL 2008'}
                                        textPosition={'right'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/kiba.svg`}
                                        imageAlt={'Nosotros con Kiba'}
                                        text={'LLEGÓ KIBA'}
                                        date={'FEBRERO 2009'}
                                        textPosition={'left'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/living-together.svg`}
                                        imageAlt={'Nosotros en nuestra primera casa'}
                                        text={'VIVIMOS JUNTOS'}
                                        date={'MARZO 2010'}
                                        textPosition={'right'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/neko.svg`}
                                        imageAlt={'Neko acechando a su presa'}
                                        text={'LLEGÓ NEKO'}
                                        date={'OCTUBRE 2011'}
                                        textPosition={'left'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/flat.svg`}
                                        imageAlt={'Nosotros en nuestra casa actual'}
                                        text={'COMPRAMOS PISO'}
                                        date={'MAYO 2022'}
                                        textPosition={'right'}/>
                </div>
            </div>
            <p className="text-center bg-white tracking-widest px-6 py-16  max-w-5xl m-auto">¡Acompáñanos
                en el siguiente gran evento de nuestras vidas!
            </p>
        </div>
    );
};

export default AboutUs;
