import Image from 'next/image'

export const ConfirmationCard = (): JSX.Element => {
  return (
      <section className='flex flex-col items-center w-full bg-white'>
          <a href=''
             className='p-4 mt-9 font-bold tracking-widest text-sm leading-6 bg-primary-brown text-white lg:mt-20'>
              CONFIRMAR ASISTENCIA
          </a>
          <Image priority
                 className='pt-7 pb-10 lg:pt-10 lg:pb-20'
                 src="images/envelope.svg"
                 height={92}
                 width={76}
                 alt="Anillos entrelazados"/>
      </section>
  )
}
