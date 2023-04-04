import Image from 'next/image';

export const Presentation = (): JSX.Element => {
    return (
        <section>
            <div className="flex flex-col items-center">
                <Image priority
                       src={'/images/couple-photo.svg'}
                       alt={'Imagen de Roberto y Lorena posando to rexulones'}
                       width={500}
                       height={390}/>
                <div className='absolute top-[360px]'>
                    <p className="tracking-widest leading-6 text-sm font-bold py-2">23 / 09 / 23</p>
                    <Image priority
                           src="/icons/rings-gold.svg"
                           height={50}
                           width={105}
                           alt="Anillos entrelazados"/>
                </div>
            </div>
            <h1 className="flex flex-col items-center text-5xl font-fantasy pt-8">
                Lorena y Roberto
            </h1>
        </section>
    )
}
