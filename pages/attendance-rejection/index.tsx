import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import bg from '@/public/images/tile-background.png';

const Index = () => {

    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat'
        }}>
            <NavigationHeader/>
            <div className="min-h-[83vh] max-w-5xl m-auto bg-white text-sm lg:text-base">
                <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/flower.svg`}
                             imageAlt={'Imagen de una flor'}
                             text={''}
                             height={80}
                             width={220}/>
                <p className="text-center tracking-widest pt-6">
                    Qué pena que no puedas venir...
                </p>
                <p className="text-center tracking-widest pt-6">
                    Seguro que hay más momentos en los que podamos compartir alegrías juntos.
                </p>
                <p className="text-center tracking-widest pt-6">
                    ¡Nos vemos en el próximo!
                </p>
            </div>
        </div>
    )
}

export default Index;
