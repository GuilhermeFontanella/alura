import { Tarefa } from '../../../types/tarefa';
import style from '../styles.module.scss';

export default function Item({id, tarefa, tempo, selecionado, finalizado}: Tarefa) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}