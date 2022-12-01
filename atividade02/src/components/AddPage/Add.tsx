import { Link, useNavigate, useParams,  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AddVideoService, AddVideo } from './AddService'

export function AvatarCadastro() {
    
  const navigate = useNavigate ();

  const {id} = useParams ();

  const [video, setVideo] = useState<AddVideo>({descricao: '', link: ''});

  function valueChange(event: React.ChangeEvent<HTMLInputElement>){
      const {name, value} = event.target;
      setVideo({...video, [name]: value});
  }

  useEffect(() => {
      if (id){
          let video = AddVideoService.buscarPorId(id);
          if (video) {
          setVideo(video);
          }

      }
  }, [])

  function salvar(event: any) {
      event.preventDefault();

      if(video){
        AddVideoService.salvar(video)
      }
      navigate('/video')
      AddVideoService.salvar(video);
  }
  
  return (
      <>
      <Link to={'/video/'}> Voltar </Link>
      <h1> Página de Adicionar Video </h1>
  <form>
      <div>
          <label> Descrição </label>
          <input type ='text' name='nome' value={video.descricao} onChange={valueChange}/>
      </div>
      <div>
          <label> Video (link) </label>
          <input type ='text' name='link' value={video.link} onChange={valueChange}/>
      </div>

      <button onClick={salvar}> Salvar </button>
  </form>

  
      </>
  )
}