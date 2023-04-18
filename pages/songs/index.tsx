import { addSongsSuggestions, SongsSuggestions } from '@/firebase/client';
import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import bg from '@/public/images/tile-background.png';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Index = () => {
    const router = useRouter()
    const [hasSubmit, setHasSubmit] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const hasArrivedToMaxWith = useMediaQuery('(max-width: 1023px)');

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith])

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setHasSubmit(true)

        const data: SongsSuggestions = {
            songsSuggestions: event.target.songs.value
        }

        await addSongsSuggestions(data).
            then(() => {
                router.push('/songs-confirmation')
            }).
            catch(e => {
                setHasSubmit(false)
                console.log(e)
            });
    }

    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat'
        }}>
            <NavigationHeader/>
            <div className="min-h-[calc(100vh-112px)] max-w-5xl m-auto bg-white lg:text-base ">
                <div className="lg:pt-14">
                    <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/date-rings-large.svg`}
                                 imageAlt={'Anillos de boda entrelazados'}
                                 text={'¿Qué es una fiesta sin temazos?'}
                                 height={108}
                                 width={150}/>
                </div>
                <div className="px-6 lg:px-44 relative">
                    <h3 className="tracking-widest pt-10 ">
                        ¿QUÉ TE GUSTARÍA QUE SONARA EN LA FIESTA?
                    </h3>
                    <form onSubmit={handleSubmit}
                          className="flex flex-col">
                        <label className=" text-primary-brown pt-4 z-10"
                               htmlFor="songs">
                            Escribe aquí tus peticiones para el DJ
                        </label>
                        <textarea className="z-10 bg-light-grey border border-primary-grey italic p-3 mt-2"
                                  id="songs"
                                  name="songs"
                                  rows={4}
                                  cols={50}
                                  required
                                  placeholder="¿Qué canciones hacen que te levantes para darlo todo o que te quedes afónico cantando?"/>

                        <div className="flex justify-end">
                            <button className="py-3 px-10 mt-8 font-bold tracking-widest leading-6 bg-primary-brown text-white"
                                    type="submit"
                                    disabled={hasSubmit}>ENVIAR
                            </button>
                        </div>
                    </form>
                    <div className="pb-4 mt-[-16px] lg:mt-[-48px] lg:ml-[-148px]">
                        <Image
                               src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/disco-dancing.svg`}
                               height={isMobile ? 233 : 410}
                               width={isMobile ? 272 : 477}
                               alt="Pareja bailando en la disco"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
