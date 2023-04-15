import Image from 'next/image';

interface Props {
    imageSrc: string;
    imageAlt: string;
    text: string;
    height: number;
    width: number;
}

const HeaderImage = ({ imageSrc, imageAlt, text, height, width}: Props) => {
    return (
        <header className="flex bg-white flex-col m-auto items-center w-full max-w-5xl mt-14 pt-6">
            <Image priority
                   src={imageSrc}
                   height={height}
                   width={width}
                   alt={imageAlt}/>
            <p className="tracking-widest leading-6 pt-6 lg:text-lg lg:pt-10">
                {text}
            </p>
        </header>
    )

}

export default HeaderImage;
