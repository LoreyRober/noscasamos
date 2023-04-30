import Link from 'next/link';

const SongsSugestions = (): JSX.Element => {
    return (
        <section className='flex flex-col text-center mt-[-1px] px-6 py-10 bg-white-with-opacity items-center w-full bg-white'>
            <h3 className='tracking-widest text-xl font-bold'>¿Qué es una fiesta sin temazos?</h3>
            <p className='tracking-widest leading-6 pt-4 lg:pt-8'>Como queremos que lo des todo en la pista de baile, queremos conocer tus preferencias musicales. ¡Dinos lo que te gusta!</p>
            <Link href='/songs'
               className='p-4 mt-6 font-bold tracking-widest leading-6 bg-primary-brown text-white'>
                SUGERIR TEMAZOS
            </Link>
        </section>
    )
}

export default SongsSugestions;
