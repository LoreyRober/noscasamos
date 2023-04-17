import React from 'react';
import Countdown, { formatTimeDelta } from 'react-countdown';

interface Props {
    date: Date;
}

interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const CountdownTimer = ({ date }: Props) => {
    const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {

        if (completed) {
            return (
                <p className="flex flex-row gap-2 justify-center tracking-widest  leading-6 py-4 lg:py-0">
                    ¡La boda ha comenzado!</p>
            )
        } else {
            return (
                <p className="flex flex-row flex-wrap gap-2 justify-center tracking-widest  leading-6 py-4">
                    <span className="font-bold tabular-nums">{days}</span> días
                    <span className="font-bold tabular-nums">{hours}</span> horas
                    <span className="font-bold tabular-nums">{minutes}</span> minutos
                    <span className="font-bold tabular-nums">{seconds}</span> segundos </p>
            );
        }
    };

    return (
        <Countdown date={date}
                   renderer={renderer}/>
    );
};

export default CountdownTimer;
