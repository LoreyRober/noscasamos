import Image from 'next/image';

const Gift = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center px-4 pt-10 text-center bg-white w-full">
            <h3 className="tracking-widest leading-6 text-xl font-bold">
                El mejor regalo es que nos acompañéis en este día...
            </h3>
            <p className="tracking-widest leading-6 pt-4 lg:pt-8">
                Pero os agradeceríamos mucho que nos ayudarais con nuestra luna de miel en este número de cuenta:
            </p>
            <p className="tracking-widest  leading-6 pt-4 lg:pt-8 lg:tracking-wider">
                ES61 1465 0100 98 2046018522
            </p>
            <Image
                className='pt-7 pb-10'
                src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/envelope.svg`}
                height={92}
                width={76}
                alt="Anillos entrelazados"/>
        </div>
    );
}

export default Gift;
