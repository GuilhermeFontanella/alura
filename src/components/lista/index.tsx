import { Tarefa } from '../../types/tarefa';
import Item from './item';
import style from './styles.module.scss';

export function Lista({ listaTarefas }: { listaTarefas: Tarefa[] }) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul className={style.listaTarefas}>
                {
                    listaTarefas.map((e, i) => (
                        <Item
                        key={i}
                        {...e}  
                        ></Item>
                    ))
                }
            </ul>
        </aside>
    );
}