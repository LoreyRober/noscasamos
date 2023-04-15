import Image from 'next/image';
import Link from 'next/link';

export const ConfirmationCard = (): JSX.Element => {
  return (
      <section className='flex flex-col items-center w-full bg-white'>
          <Link href='/confirmation'
             className='p-4 mt-9 font-bold tracking-widest text-sm leading-6 bg-primary-brown text-white lg:mt-20'>
              CONFIRMAR ASISTENCIA
          </Link>
          <Image
                 className='pt-7 pb-10 lg:pt-10 lg:pb-20'
                 src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/envelope.svg`}
                 height={92}
                 width={76}
                 alt="Anillos entrelazados"/>
      </section>
  )
}
