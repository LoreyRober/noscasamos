import Image from 'next/image';

interface Props {
    imageSrc: string;
    srcUrl: string;
    imageAlt: string;
    title: string;
    subtitle: string;
}

export const ImageCard = ({imageSrc, srcUrl, imageAlt, title, subtitle}: Props): JSX.Element => {
  return (
      <section className='relative w-full pb-[100%] mt-[-12px] lg:pb-[45%]'>
          <Image
              priority
              src={imageSrc}
              alt={imageAlt}
              style={{objectFit: 'cover'}}
              fill
          />
          <div className="absolute flex flex-col text-white left-6 top-12">
                <p className='font-bold tracking-widest pb-1'>{title}</p>
                <p className='tracking-widest text-sm leading-6 pb-2'>{subtitle}</p>
              <a
                  href={srcUrl}
                  target='_blank'
                  className="p-4 font-bold tracking-widest text-sm leading-6 bg-white text-black">VER EN GOOGLE MAPS</a>
          </div>
      </section>
  )
}
