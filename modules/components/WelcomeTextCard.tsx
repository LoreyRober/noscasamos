import { useMediaQuery } from '@react-hook/media-query';

export const WelcomeTextCard = (): JSX.Element => {
    const isMobile = useMediaQuery('(max-width: 1023px)');

    return (
        <div className="flex flex-col items-center p-10 lg:py-12 bg-white">
            {isMobile ? (
                <h3 className="tracking-widest leading-6">
                    ¡Bienvenidos a nuestra boda! </h3>
            ) : (
                <h3 className="tracking-widest leading-6 lg:text-2xl">
                    BIENVENIDOS A NUESTRA BODA </h3>
            )}
            <p className="tracking-widest text-sm leading-6 pt-4 lg:text-xl lg:pt-8">
                ¡Que sí! ¡Que nos casamos!
            </p>
            <p className="tracking-widest text-sm leading-6 pt-4 pb-10 text-center lg:text-xl lg:pt-8 lg:tracking-wider">
                En el año en el que cumplimos una quincena juntos hemos decidido que por fin ha llegado el momento. Y
                mientras que llega el gran día hemos preparado esta web para que estés al día de todo, nos confirmes tu
                asistencia o, incluso puedas sugerirnos tus temazos favoritos para la fiesta.
            </p>
        </div>
    )
}