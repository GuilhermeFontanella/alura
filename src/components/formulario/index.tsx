import React from "react";
import style from './styles.module.scss';
import Botao from "../button";
import { Tarefa } from "../../types/tarefa";
import { v4 as uuidV4 } from "uuid";

export class Formulario extends React.Component<{setListaTarefas: React.Dispatch<
    React.SetStateAction<Tarefa[]>>}
> {
    state: Tarefa = {
        tarefa: "",
        tempo: "00:00:00",
        selecionado: false,
        finalizado: false,
        id: ""
    }

    adicionaTarefa(event: React.FormEvent<HTMLFormElement>) {
        this.props.setListaTarefas(tarefasAntigas => [
            ...tarefasAntigas, {
                ...this.state,
                selecionado: false,
                finalizado: false,
                id: uuidV4()
            }
        ])
        event.preventDefault();
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form action="" className={style.novaTarefa} onSubmit={ this.adicionaTarefa.bind(this) }>
                <div className={style.inputContainer}>
                    <label 
                    htmlFor="tarefa"
                    id="tarefa"
                    >Adicione um novo estudo:</label>
                    <input 
                    value={this.state.tarefa}
                    onChange={(event) => this.setState({ ...this.state, tarefa: event.target.value})}
                    type="text" 
                    name="tarefa"
                    placeholder="O que voce quer estudar?"
                    required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo" id="tempo">
                        Duração:
                    </label>
                    <input 
                    value={this.state.tempo}
                    onChange={(event) => this.setState({ ...this.state, tempo: event.target.value})}
                    type="time" 
                    name="tempo"
                    placeholder="Quanto tempo voce irá levar?"
                    required
                    min="00:00:00"
                    max="24:00:00"/>
                </div>
                <Botao type="submit">Adicionar Tarefa</Botao>
            </form>
        )
    }
}