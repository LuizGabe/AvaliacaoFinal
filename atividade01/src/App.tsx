import React from "react";
import "./App.css";

function App() {

    // Aqui fica a configuração de pessoas que fazem parte do grupo
    const pessoas = [
        {nome:'Luiz Gabriel Grumicker Pereira', imgUrl: 'https://img.icons8.com/doodle/512/user.png'},
        {nome:'Matheus Henrique da Rosa Foliatti', imgUrl: 'https://img.icons8.com/doodle/512/user.png'},
        {nome:'Carlos Sadi Mucha Zomer', imgUrl: 'https://img.icons8.com/doodle/512/user.png'}
    ]
    return (

    <div>
        <section className={"atividade1"}>

            <div className= "pessoas" >
                {/* Aqui fica o Titulo */ }
                <h1 id = "titulo" > Integrantes </h1>

                {/* Aqui começa a div com as pessoas (imagem e nome) EM GRUPO */ }
                <div id="grupo" >
                    {
                        /* Aqui fica a repetição para mostrar todas as pessoas */
                        pessoas.map((n) => (
                            /* Aqui inicia a div das pessoas INDIVIDUALMENTE */
                            <div id= "pessoa" >
                                {/* Aqui fica a imagem que aparecera para cada pessoa */ }
                                <img src = { n.imgUrl } alt = {`${n.nome} imagem`} id = "foto" />
                                {/* Aqui fica o nome da pessoa que aparecera para cada pessoa */ }
                                <p id = "nome" > { n.nome } </p>

                                {/* Aqui termina a div das pessoas INDIVIDUALMENTE */ }
                            </div>
                        ))
                    }</div>
            </div>
        </section>
        <section className={"atividade4"}>
            <div>
                <h1 id="texto" > Tarefa número 4 </h1>
                < p id = "texto" >
                    Criar uma página para controlar a lista de vídeos do youtube para
                    estudar: { " " }
                </p>
                <ul id = "listagem" >
                    <li id="texto" >
                        Consiste no cadastro de um vídeo do youtube(link) e uma descrição;
                    </li>{" "}
                    < br />
                    <li id="texto" >
                        Pode ser editado o link do vídeo e a descrição;
                    </li>{" "}
                    < br />
                    <li id="texto" > Pode ser excluído.</li>
                </ul>
            </div>
        </section>
    </div>
);


}

export default App;
