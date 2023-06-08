import React, { ReactNode } from 'react';
import style from './styles.module.scss';

interface Props {
    children: ReactNode,
    type: "button" | "submit",
    onClick?: any,
}

export default function Botao({ children, onClick, type }: Props) {
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}


