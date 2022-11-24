import React from 'react';
import './App.sass'

function App() {
  // Aqui fica a configuração de pessoas que fazem parte do grupo
  const pessoas = [
    {nome:'Luiz Gabriel Grumicker Pereira', imgUrl: ''},
    {nome:'Matheus Henrique da Rosa Foliatti', imgUrl: ''},
    {nome:'Carlos Sadi Mucha Zomer', imgUrl: ''}
  ]

  return (
    <div className='tudo'>

      {/* Aqui fica o Titulo */}
      <h1 id='titulo'>Integrantes</h1>

      {/* Aqui começa a div com as pessoas (imagem e nome) EM GRUPO */}
      <div id='grupo'>
        {
          /* Aqui fica a repetição para mostrar todas as pessoas */
          pessoas.map((n) => (

            /* Aqui inicia a div das pessoas INDIVIDUALMENTE */
            <div className='pessoa'>

              {/* Aqui fica a imagem que aparecera para cada pessoa */}
              <img src={n.imgUrl} alt={`${n.nome} imagem`}/>

              {/* Aqui fica o nome da pessoa que aparecera para cada pessoa */}
              <h4>{n.nome}</h4>

              {/* Aqui termina a div das pessoas INDIVIDUALMENTE */}
            </div>

            
          ))
        }
      </div> 

      <h1 id='titulo_tarefa'> Tarefa número 4 </h1>
      <p id='descricao_tarefa'>Criar uma página para controlar a lista de vídeos do youtube 
      para estudar: </p>
      <ul id='listagem'> 
        <li id='line1'>Consiste no cadastro de um vídeo do youtube (link) e uma descrição;</li> <br />
        <li id='line2'>Pode ser editado o link do vídeo e a descrição;</li> <br />
        <li id='line3'>Pode ser excluído.</li>
      </ul>
      {/* Aqui termina a div com as pessoas (imagem e nome) EM GRUPO */}



    </div>
  );
}

export default App;
