import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import style from "./Relogio.module.scss";
import { setConstantValue } from "typescript";

interface Props {
    dezenaMinuto?: number ;
    unidadeMinuto?: number;
    dezenaSegundo: number | 0;
    unidadeSegundo?: number;

    iniciaContagem?: any;
}

export const Relogio = (
    {

        iniciaContagem
    } : Props) => {
        const [dezenaMinuto, setDezenaMinuto] = useState(0);
        const [unidadeMinuto, setUnidadeMinuto] = useState(0);
        const [dezenaSegundo, setDezenaSegundo] = useState(0);
        const [unidadeSegundo, setUnidadeSegundo] = useState(0);
    const iniciaRelogio = () => {
        console.log('iniciaRelogio')
        setTimeout(() => {
            for (let i = 0; i <= 9; i++) {
                setUnidadeSegundo((unidadeSegundo) => unidadeSegundo += 1);
                
                if (unidadeSegundo >= 9) {
                    setUnidadeSegundo((unidadeSegundo) => unidadeSegundo = 0);
                    setDezenaSegundo((dezenaSegundo) => dezenaSegundo += 1);
                }
            }
        }, 1000);

        // setInterval(() => {
        //     setUnidadeSegundo((unidadeSegundo) => unidadeSegundo += 1);
        //     console.log('passou aqui')
        //     if (unidadeSegundo) {
        //         console.log('entrou no if');
        //     }
        //     // if (unidadeSegundo > 9) {
        //     //     console.log('entrou no if')
        //     //     setUnidadeSegundo((unidadeSegundo) => unidadeSegundo = 0);
        //     //     setDezenaSegundo((dezenaSegundo) => dezenaSegundo += 1);
        //     // }
        // }, 1000)
        console.log('fora timeout');
    }

    useEffect(() => {
        if (iniciaContagem) {
            iniciaRelogio();
            console.log('teste')
        }
    }, [iniciaContagem])
  
    return (
        <React.Fragment>
             <span className={style.relogioNumero}>{dezenaMinuto}</span>
             <span className={style.relogioNumero}>{unidadeMinuto}</span>
             <span className={style.relogioDivisao}>:</span>
             <span className={style.relogioNumero}>{dezenaSegundo}</span>
             <span className={style.relogioNumero}>{unidadeSegundo}</span>
         </React.Fragment>
    )
};

// export default function Relogio({
//     dezenaMinuto = 0,
//     unidadeMinuto = 0,
//     dezenaSegundo = 0,
//     unidadeSegundo = 0,
// }: Props) {

//     const iniciaContagem = () => {
//         setInterval(() => {
//             console.log(unidadeSegundo++)
//         }, 1000)
//     }

//     return(
//         <React.Fragment>
//             <span className={style.relogioNumero}>{dezenaMinuto}</span>
//             <span className={style.relogioNumero}>{unidadeMinuto}</span>
//             <span className={style.relogioDivisao}>:</span>
//             <span className={style.relogioNumero}>{dezenaSegundo}</span>
//             <span className={style.relogioNumero}>{unidadeSegundo}</span>
//         </React.Fragment>
//     )
// }