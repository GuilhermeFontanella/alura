import { useState } from 'react';
import { Cronometro } from '../components/cronometro';
import { Formulario } from '../components/formulario';
import { Lista } from '../components/lista';
import './App.css';
import style from './styles.module.scss'
import { Tarefa } from '../types/tarefa';


function App() {
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setListaTarefas={setListaTarefas}></Formulario>
      <Cronometro></Cronometro>
      <Lista listaTarefas={listaTarefas }></Lista>
    </div>
  );
}

export default App;
