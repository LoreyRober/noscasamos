import Link from 'next/link';

export const ConfirmationCard = (): JSX.Element => {
  return (
      <section className='flex flex-col mt-[-1px] px-6 py-10 bg-white-with-opacity items-center w-full bg-white'>
          <p className='text-xl'>¿Qué dices? ¿Te apuntas?</p>
          <Link href='/confirmation'
             className='p-4 mt-6 font-bold tracking-widest leading-6 bg-primary-brown text-white'>
              CONFIRMAR ASISTENCIA
          </Link>
      </section>
  )
}
