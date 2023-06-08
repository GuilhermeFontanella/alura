import { useRef, useState } from 'react';
import Botao from '../button/index';
import {Relogio} from './relogio';
import style from './styles.module.scss';
import { createRoot } from 'react-dom/client';

export function Cronometro() {
    const [iniciaContagem, setIniciaContagem] = useState(0);


    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronometro.</p>
            <div className={style.relogioWrapper}>
                <Relogio iniciaContagem={iniciaContagem} dezenaSegundo={0}></Relogio>
            </div>
            <div>
                <Botao type="button" onClick={
                    () => {
                        setIniciaContagem((iniciaContagem) => iniciaContagem + 1)
                    }
                }>Começar</Botao>
            </div>
        </div>
    )

}