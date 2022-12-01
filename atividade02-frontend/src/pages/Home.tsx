import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

  interface videoInterface {
    id: string
    name: string 
    url: string
    id_Category: number
  }
  interface categoryInterface {
    id: number
    name: string
  }

// Colocar dois arrays com os ids dos videos e das categorias
  const [listaVideo, setListaVideo] = useState([
    {"id": "1", "name": "Programação com nest", "url": "https://www.youtube.com/embed/W1gvIw0GNl8", "id_Category": 1},
    {"id": "2", "name": "História da Ana", "url": "https://www.youtube.com/embed/nngF9N6ePgY", "id_Category": 2}
  ]);

  const [listaCategory, setListaCategory] = useState([
    {"id": 0,"name": "Sem Categoria"},
    {"id": 1,"name": "Programação"},
    {"id": 2,"name": "Felipe Dechamps"}
  ]);

  useEffect(() => {
      buscarVideo();
      buscarCategory();
  }, []);

  function buscarVideo(){
    if(false) {
      axios.get('http://localhost:3100/video').then(resultado => {
        console.log(resultado.data);
        setListaVideo(resultado.data);
      })
    } else {
     
    }
  }
  function buscarCategory(){
    if(false) {
      axios.get('http://localhost:3100/categoria').then(resultado => {
        console.log(resultado.data);
        let categorias = [...resultado.data, resultado.data.id = Number(resultado.data.id)]
        setListaCategory(categorias);
      })
    } else {
      
    }
  }

  return (
    <>
    {
    
     listaCategory.map((category: categoryInterface) => (
      <>
        <h1>{category.name}</h1>
        {
        listaVideo.map((video: videoInterface) => (
        
          video.id_Category === category.id?
          <div>
            <iframe 
            width="560" 
            height="315" 
            src={video.url} 
            title={video.name} 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; picture-in-picture">
            </iframe>
          </div>
          :
          <></>
        ))
        }
      </>
    
    ))

   

    
    }
      <h1>Principal Page</h1>
      {
      
      
      }
    </>
  );
}

export default Home;
