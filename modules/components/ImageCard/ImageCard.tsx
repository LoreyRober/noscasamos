import Image from 'next/image';

interface Props {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
}

export const ImageCard = ({imageSrc, imageAlt, title, subtitle}: Props): JSX.Element => {
  return (
      <section className='relative w-full pb-[100%] mt-[-23px]'>
          <Image
              src={imageSrc}
              alt={imageAlt}
              fill
          />
          <div className="absolute flex flex-col text-white left-6 top-16">
                <p>{title}</p>
                <p>{subtitle}</p>
              <button className="p-4 bg-white text-black">VER EN GOOGLE MAPS</button>
          </div>
      </section>
  )
}
