import { addGuest, Guest } from '@/firebase/client';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Index = (): JSX.Element => {
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
            then(() => {}).
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
        <>
            <NavigationHeader/>
            <header className="flex flex-col items-center w-full mt-14 pt-6">
                <Image priority
                       src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/date-rings-large.svg`}
                       height={108}
                       width={150}
                       alt="Anillos entrelazados"/>
                <p className="tracking-widest leading-6 pt-6">
                    ¿Nos acompañas o te lo pierdes?
                </p>
            </header>
            <form className="flex flex-col pt-10 px-6"
                  method="post"
                  onSubmit={handleOnSubmit}>
                <h2 className="tracking-widest leading-6 text-xs">DÉJANOS TUS DATOS</h2>
                <label htmlFor="name">Nombre y apellidos</label>
                <input type="text"
                       id="name"
                       name="name"
                       required
                       placeholder={namePlaceholder}/>
                <fieldset>
                    <legend>¿Vas a asistir a nuestra boda?</legend>
                    <div>
                        <input type="radio"
                               id="isComing"
                               name="isComing"
                               value="true"
                               required
                               onClick={handleIsComingChange}/>
                        <label htmlFor="isComing">¡Por supuesto! 🤩</label>
                    </div>
                    <div>
                        <input type="radio"
                               id="isNotComing"
                               name="isComing"
                               value="false"
                               required
                               onClick={handleIsComingChange}/>
                        <label htmlFor="isNotComing">Lo siento, pero no puedo. 😢</label>
                    </div>
                </fieldset>
                {isComing && (<>
                    <fieldset>
                        <legend>¿Vienes con alguien más?</legend>
                        <div>
                            <input type="radio"
                                   id="hasCompanions"
                                   name="hasCompanions"
                                   value="true"
                                   required={isComing}
                                   onClick={handleHasCompanionsChange}/>
                            <label htmlFor="hasCompanions">Sí</label>
                        </div>
                        <div>
                            <input type="radio"
                                   id="doesNotHaveCompanions"
                                   name="hasCompanions"
                                   value="false"
                                   required={isComing}
                                   onClick={handleHasCompanionsChange}/>
                            <label htmlFor="doesNotHaveCompanions">No</label>
                        </div>
                    </fieldset>
                    {hasCompanions && (<>
                        <label htmlFor="companionsNumber">¿Cuánta gente vendra contigo?</label>
                        <select id="companionsNumber"
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
                            <div key={`companionName${index}`}>
                                <label htmlFor={`companionName${index}`}>Nombre y apellidos del {companion} acompañante
                                </label>
                                <input type="text"
                                       required={hasCompanions}
                                       id={`companionName${index}`}
                                       name={`companionName${index}`}
                                       placeholder={namePlaceholder}/>
                            </div>
                        )) : companionsArray.length !== 0 && (
                            <>
                                <label htmlFor={`companionName0`}>Nombre y apellidos del acompañante
                                </label>
                                <input type="text"
                                       required={hasCompanions}
                                       id={`companionName0`}
                                       name={`companionName0`}
                                       placeholder={namePlaceholder}/>
                            </>
                        )}

                    </>)}

                    <label htmlFor="suggestions">¿TIENES ALGUNA PETICIÓN ESPECIAL?</label>
                    <label htmlFor="suggestions">¿Tienes alergias? ¿Eres vegano? ¿Prefieres un menú infantil?... Déjanos
                        aquí un comentario para tenerlo en cuenta
                    </label>
                    <input type="text"
                           id="suggestions"
                           name="suggestions"
                           placeholder="Escribe aquí lo que necesites..."/>
                </>)}
                <button type="submit"
                        disabled={hasSubmit}>Submit
                </button>
            </form>
        </>
    )
}

export default Index;
