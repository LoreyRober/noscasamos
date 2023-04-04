import { useState } from 'react'

export const NavigationHeader = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex flex-row justify-between bg-black text-white">
            <h1 className="py-4 px-6">
                Lorena & Roberto
            </h1>
            <div className="flex flex-col py-4 px-6 relative">
                <button onClick={() => setIsOpen(!isOpen)}>Aqui va el menu</button>
                {isOpen && (
                    <nav className="absolute top-10 w-full bg-black">
                        <ul className="flex flex-col space-y-2">Option 1</ul>
                        <ul className="flex flex-col space-y-2">Option 2</ul>
                        <ul className="flex flex-col space-y-2">Option 3</ul>
                        <ul className="flex flex-col space-y-2">Option 4</ul>
                    </nav>
                )}
            </div>
        </header>
    )
}
