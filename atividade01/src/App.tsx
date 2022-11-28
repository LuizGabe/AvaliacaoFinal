import React from "react";
import "./App.sass";
function App() {
    // Aqui fica a configuração de pessoas que fazem parte do grupo
    const pessoas = [
        {
            nome: "Luiz Gabriel Grumicker Pereira",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/9058/9058715.png",
        },
        {
            id:2,
            nome: "Matheus Henrique da Rosa Foliatti",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/9058/9058716.png",
        },
        {
            id:3,
            nome: "Carlos Sadi Mucha Zomer",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/9058/9058721.png",
        },
    ];

    return (
        <div>
            <div className="pessoas">
                {/* Aqui fica o Titulo */}
                <h1 id="titulo">Integrantes</h1>

                {/* Aqui começa a div com as pessoas (imagem e nome) EM GRUPO */}
                <div id="grupo">
                    {
                        /* Aqui fica a repetição para mostrar todas as pessoas */
                        pessoas.map((n) => (
                            /* Aqui inicia a div das pessoas INDIVIDUALMENTE */
                            <div id="pessoa"  >
                                {/* Aqui fica a imagem que aparecera para cada pessoa */}
                                <img src={n.imgUrl} alt={`${n.nome} imagem`} id="foto" />

                                {/* Aqui fica o nome da pessoa que aparecera para cada pessoa */}
                                <h4 id="nome">{n.nome}</h4>

                                {/* Aqui termina a div das pessoas INDIVIDUALMENTE */}
                            </div>
                        ))
                    }
                </div>

                {/* Aqui termina a div com as pessoas (imagem e nome) EM GRUPO */}
            </div>
            <div className="atividade4">
                <h1 id="texto"> Tarefa número 4 </h1>
                <p id="texto">
                    Criar uma página para controlar a lista de vídeos do youtube para
                    estudar:{" "}
                </p>
                <ul id="listagem">
                    <li id="texto">
                        Consiste no cadastro de um vídeo do youtube (link) e uma descrição;
                    </li>{" "}
                    <br />
                    <li id="texto">
                        Pode ser editado o link do vídeo e a descrição;
                    </li>{" "}
                    <br />
                    <li id="texto">Pode ser excluído.</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
