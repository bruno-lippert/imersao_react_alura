import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react'
import { StyledRegisterVideo } from './styledRegisterVideo'

function useForm({initialValues}) {
  const [values, setValues] = useState(initialValues)

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name
      setValues({ ...values, [name]: value })
    },
    clearForm ()  {
      setValues({});    }
  }
}

function getThumb(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const supabaseUrl = 'https://edruuzehjlinhtdgfiem.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcnV1emVoamxpbmh0ZGdmaWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NjgwMjMsImV4cCI6MTk5NjE0NDAyM30.5TeSnqJlBE6TNMyRZLbM0-iijJpGiBmm5AYfDsbi11w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false)
  


  const formCadastro = useForm({
    initialValues : {title: "", url: ""}
  })
  return (
    <StyledRegisterVideo>
      <button type="button" className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          formCadastro.clearForm();
          setFormVisivel(false)

          supabase.from("video").insert({
            title: formCadastro.values.title,
            url: formCadastro.values.url,
            thumb: getThumb(formCadastro.values.url),
            playlist: "estudos"
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err)
          })
        }}>
          <div className='form'>
            <button type='button' className='close-modal' onClick={() => setFormVisivel(false)}>X</button>
            <input type="text" placeholder='Título do vídeo' name="title" onChange={formCadastro.handleChange} className='video-info' />
            <input type="text" placeholder='URL do vídeo' name="url" onChange={formCadastro.handleChange} className='video-info' />
            <button type="submit" className='register-videoButton'>Cadastrar</button>
          </div>
        </form>
      )
        : null
      }

    </StyledRegisterVideo>
  )
}
