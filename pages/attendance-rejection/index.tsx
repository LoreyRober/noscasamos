import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import bg from '@/public/images/tile-background.png';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Index = () => {
    const [isMobile, setIsMobile] = useState(false);
    const hasArrivedToMaxWith = useMediaQuery('(max-width: 1023px)');

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith]);

    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat'
        }}>
            <NavigationHeader/>
            <div className="min-h-[calc(100vh-112px)] max-w-5xl m-auto bg-white lg:text-base px-6">
                <div className="lg:pt-14">
                    <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/flower.svg`}
                                 imageAlt={'Imagen de una flor'}
                                 text={'Qué pena que no puedas venir...'}
                                 height={80}
                                 width={220}/>
                </div>
                <p className="text-center tracking-widest pt-6 ">
                    Seguro que hay más momentos en los que podamos compartir alegrías juntos.
                </p>
                <p className="text-center tracking-widest pt-6">
                    ¡Nos vemos en el próximo!
                </p>
                <div className="flex flex-col items-center w-full bg-white pt-16 pb-6 max-w-5xl m-auto">
                    <Image
                           src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/people-celebrating.svg`}
                           height={isMobile ? 240 : 360}
                           width={isMobile ? 284: 426}
                           alt="Gente de fiesta celebrando"/>
                </div>
            </div>
        </div>
    )
}

export default Index;
