import Image from 'next/image';

interface Props {
    imageSrc: string;
    imageAlt: string;
    text: string;
    date: string;
    textPosition: 'left' | 'right';
}

const HistoryLineSegment = ({ imageSrc, imageAlt, text, date, textPosition }: Props) => {
    return (
        <div className={`${textPosition === 'left' ? 'justify-end' : 'pl-[75px] lg:pl-[111px]'} flex flex-row items-center bg-white w-full pt-6`}>
            <div className={`${textPosition === 'left' ? 'flex flex-col items-end order-first pr-5 ' : 'order-last pl-5'}`}>
                <p className="text-sm tracking-widest leading-6 font-bold lg:text-base">
                    {text}
                </p>
                <p className="text-xs tracking-widest leading-6 lg:text-sm">
                    {date}
                </p>
            </div>
            <div className={`${textPosition === 'left' ? 'w-[48%]' : ' flex flex-col items-end'} z-10`}>
                <Image src={imageSrc}
                       alt={imageAlt}
                       width={80}
                       height={80}/>
            </div>
        </div>
    );
};

export default HistoryLineSegment;
