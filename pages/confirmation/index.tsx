import { addGuest, Guest } from '@/firebase/client';
import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import bg from '@/public/images/tile-background.png';

const Index = (): JSX.Element => {
    const router = useRouter()
    const [isComing, setIsComing] = useState(false);
    const [hasCompanions, setHasCompanions] = useState(false);
    const [numberOfCompanions, setNumberOfCompanions] = useState(0);
    const [companionsArray, setCompanionsArray] = useState(['']);
    const [hasSubmit, setHasSubmit] = useState(false);

    const selectOptions = ['1', '2', '3', '4', '5', '6'];
    const namePlaceholder = 'Escribe tu nombre completo (apellidos incluidos)';
    const ordinalNumbers = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto', 'sexto'];

    const handleIsComingChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setIsComing(JSON.parse(event.currentTarget.value));
    }

    const handleHasCompanionsChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setHasCompanions(JSON.parse(event.currentTarget.value));
    }

    const handleNumberOfCompanions = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfCompanions(+event.currentTarget.value);
    }

    const handleOnSubmit = async (event: any) => {
        event.preventDefault()
        setHasSubmit(true)

        const data: Guest = {
            name: event.target.name.value,
            isComing: event.target.isComing.value,
            companionName0: event?.target?.companionName0?.value ?? null,
            companionName1: event?.target?.companionName1?.value ?? null,
            companionName2: event?.target?.companionName2?.value ?? null,
            companionName3: event?.target?.companionName3?.value ?? null,
            companionName4: event?.target?.companionName4?.value ?? null,
            companionName5: event?.target?.companionName5?.value ?? null,
            suggestions: event?.target?.suggestions?.value ?? null
        }

        await addGuest(data).
            then(() => {
                router.push('/attendance-confirmation')
            }).
            catch(e => {
                setHasSubmit(false)
                console.log(e)
            });
    }

    const companionsArrayBuilder = (numberOfCompanions: number) => {
        const companionsArray = [];
        for (let i = 0; i < numberOfCompanions; i++) {
            companionsArray.push(ordinalNumbers[i]);
        }
        return companionsArray;
    }

    useEffect(() => {
        setCompanionsArray(companionsArrayBuilder(numberOfCompanions));
    }, [numberOfCompanions])


    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat',
        }}>
            <NavigationHeader/>
            <div className='min-h-[83vh] max-w-5xl m-auto bg-white'>
            <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/date-rings-large.svg`}
                         imageAlt={'Anillos entrelazados'}
                         text={'¿Nos acompañas o te lo pierdes?'}
                         height={108}
                         width={150}/>
            <form className="flex bg-white  flex-col m-auto pt-10 px-6 max-w-5xl lg:px-44"
                  method="post"
                  onSubmit={handleOnSubmit}>
                <h2 className="tracking-widest leading-6">DÉJANOS TUS DATOS</h2>
                <label className='text-sm text-primary-brown pt-4' htmlFor="name">Nombre y apellidos</label>
                <input className='bg-light-grey border border-primary-grey text-sm italic p-3 mt-2'
                       type="text"
                       id="name"
                       name="name"
                       required
                       placeholder={namePlaceholder}/>
                <fieldset>
                    <legend className='text-sm text-primary-brown pt-8'>¿Vas a asistir a nuestra boda?</legend>
                    <div className='pt-4'>
                        <input type="radio"
                               id="isComing"
                               name="isComing"
                               value="true"
                               required
                               onClick={handleIsComingChange}/>
                        <label className='text-sm pl-2' htmlFor="isComing">¡Por supuesto! 🤩</label>
                    </div>
                    <div className='pt-4'>
                        <input type="radio"
                               id="isNotComing"
                               name="isComing"
                               value="false"
                               required
                               onClick={handleIsComingChange}/>
                        <label className='text-sm pl-2' htmlFor="isNotComing">Lo siento, pero no puedo. 😢</label>
                    </div>
                </fieldset>
                {isComing && (<>
                    <fieldset>
                        <legend className='text-sm text-primary-brown pt-8'>¿Vienes con alguien más?</legend>
                        <div className='pt-4'>
                            <input type="radio"
                                   id="hasCompanions"
                                   name="hasCompanions"
                                   value="true"
                                   required={isComing}
                                   onClick={handleHasCompanionsChange}/>
                            <label className='text-sm pl-2' htmlFor="hasCompanions">Sí</label>
                        </div>
                        <div>
                            <input type="radio"
                                   id="doesNotHaveCompanions"
                                   name="hasCompanions"
                                   value="false"
                                   required={isComing}
                                   onClick={handleHasCompanionsChange}/>
                            <label className='text-sm pl-2' htmlFor="doesNotHaveCompanions">No</label>
                        </div>
                    </fieldset>
                    {hasCompanions && (<>
                        <label className='text-sm text-primary-brown pt-8' htmlFor="companionsNumber">¿Cuánta gente vendra contigo?</label>
                        <select className='bg-light-grey border border-primary-grey text-sm italic p-3 mt-2'
                                id="companionsNumber"
                                name="companionsNumber"
                                onChange={handleNumberOfCompanions}
                                defaultValue="default"
                                required={hasCompanions}>
                            <option value="default"
                                    disabled
                                    hidden>Selecciona el número de acompañantes
                            </option>
                            {selectOptions.map((option) => (
                                <option key={`companionsNumber${option}`}
                                        value={option}>{option}</option>
                            ))}
                        </select>
                        {(companionsArray.length > 1) ? companionsArray.map((companion, index) => (
                            <div className='pt-8' key={`companionName${index}`}>
                                <label className='text-sm text-primary-brown' htmlFor={`companionName${index}`}>Nombre y apellidos del {companion} acompañante
                                </label>
                                <input className='bg-light-grey w-full border border-primary-grey text-sm italic p-3 mt-2'
                                       type="text"
                                       required={hasCompanions}
                                       id={`companionName${index}`}
                                       name={`companionName${index}`}
                                       placeholder={namePlaceholder}/>
                            </div>
                        )) : companionsArray.length !== 0 && (
                            <div className='pt-8'>
                                <label className='text-sm text-primary-brown' htmlFor={`companionName0`}>Nombre y apellidos del acompañante
                                </label>
                                <input className='bg-light-grey w-full border border-primary-grey text-sm italic p-3 mt-2'
                                       type="text"
                                       required={hasCompanions}
                                       id={`companionName0`}
                                       name={`companionName0`}
                                       placeholder={namePlaceholder}/>
                            </div>
                        )}

                    </>)}

                    <label className='text-sm text-primary-black pt-8' htmlFor="suggestions">¿TIENES ALGUNA PETICIÓN ESPECIAL?</label>
                    <label className='text-sm text-dark-grey pt-4' htmlFor="suggestions">¿Tienes alergias? ¿Eres vegano? ¿Prefieres un menú infantil?... Déjanos
                        aquí un comentario para tenerlo en cuenta
                    </label>
                    <textarea className="bg-light-grey border border-primary-grey text-sm italic p-3 mt-2"
                              id="suggestions"
                              name="suggestions"
                              rows={4}
                              cols={50}
                              placeholder="Escribe aquí lo que necesites..."/>
                </>)}
                <div className='flex justify-end'>
                <button className='py-3 px-10 mt-8 mb-12 font-bold tracking-widest text-sm leading-6 bg-primary-brown text-white'
                        type="submit"
                        disabled={hasSubmit}>ENVIAR
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Index;
