import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [id, setid] = useState();
  const [linkVideo, setLinkVideo] = useState();
  const [descricaoVideo, setDescricaoVideo] = useState();
  const [listaVideo, setListaVideo] = useState([]);

  useEffect(() => {
      buscar();
  }, []);

  function buscar(){
    axios.get('http://localhost:3100/tarefa').then(resultado => {
      console.log(resultado.data);
      setListaVideo(resultado.data);
  })
  }

  function salvar(event){
    event.preventDefault();
    let tarefa = {
      codigo: id,
      descricao: descricaoVideo,
      link: linkVideo
    };
    console.log('tarefa', tarefa);

    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();
    })
  }

  function editar (event){
    let tarefa = {
      id: setid,
      descricao: setDescricaoVideo,
      link: linkVideo
    };
    console.log('tarefa', tarefa);

    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();
    })
  }

  function excluir(id){
    axios.delete(`http://localhost:3100/tarefa/${id}`).then(() => {
      buscar();
    })
  }

  return (
    <div className="container">
      
    <form onSubmit={(event) => salvar (event)} >
      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <input type="text" className="form-control" value={linkVideo} onChange={(event) => setLinkVideo(event.target.value)}/>
        <input type="text" className="form-control" value={descricaoVideo} onChange={(event) => setDescricaoVideo(event.target.value)}/>
        <input type="text" className="form-control" value={id} onChange={(event) => setid(event.target.value)}/>
      </div>
    
      <button type="submit" className='btn btn-primary'>Salvar</button>

    </form>

      <h3>Lista de Videos</h3>

      <table className='table'>
        <thead>
          <tr>
            <td> Video </td>
            <td> Ações </td>
          </tr>
        </thead>
        <tbody>
          {
            listaVideo.map((tarefa, index) => (
              <tr key={index}>
                <td>{tarefa.descricaoVideo}</td>
                <td><button type="submit" className='btn btn-primary' onClick={(event) => editar (event)}>Editar</button> 
                    <button type="submit" className='btn btn-primary' onClick={(id) => excluir (id)}> Excluir </button>                  
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
