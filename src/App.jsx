import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  const [name, setName] = useState("Aguardando...")
  const [bio, setBio] = useState("Aguardando...")
  const [avatarURL, setAvatarURL] = useState("Aguardando...")
  const [repositorioURL, setRepositorioURL] = useState("Aguardando...")

  function handleBuscar() {

    axios.get(`https://api.github.com/users/${usuario}`)
      .then((response) => {
        setName(response.data.name);
        setBio(response.data.bio);
        setAvatarURL(response.data.avatar_url)
        setRepositorioURL(response.data.repos_url)

        // console.log(response.data)

      });

  }

  return (
    <>
      <div className='container-app'>
        <div className='container'>
          <header className='header-top'>
            <ul>
              <li>
              
              </li>
            </ul>
          </header>
          <main>
            <div className='form'>
              <h1>buscador de perfis github</h1>
              <input type='text' name='' value={usuario} onChange={e => setUsuario(e.target.value)} />
              <button onClick={handleBuscar}>pesquisar</button>
            </div>
            <div className='content'>
              <div>
                <img src={avatarURL} alt='Perfil'/>
                <h1>{name}</h1>
                <p>{bio}</p>
                <p>{repositorioURL}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
