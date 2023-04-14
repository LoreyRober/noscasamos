import Image from 'next/image'

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col w-full bg-black text-white">
            <div className="p-8">
                <p className="flex flex-row justify-center tracking-widest text-sm leading-6">
                    <span className="pr-2">LORENA</span>
                    <Image priority
                           src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}icons/rings-white.svg`}
                           height={24}
                           width={50}
                           alt="Anillos entrelazados"/>
                    <span className="pl-2">ROBERTO</span>
                </p>
                <p className="flex flex-row justify-center tracking-widest text-sm leading-6">
                    23 Septiembre 2023
                </p>
            </div>
        </footer>
    )
}
