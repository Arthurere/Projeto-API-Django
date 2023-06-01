import { useState } from 'react'
import axios from 'axios'
import './styleCad.css'
import Login from './Login'
import Menu from './menu'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState(0)

  async function addUsers(){
    const response = await axios.post("http://127.0.0.1:8000/alunos/",{nome: nome, email: email, cpf: cpf})
  }

  return (
    
    <div id='tudo'>
      
      <div id='quest'>
        <br></br>
        <h1>Cadastro do usuário</h1>
        <br></br>
        
        <input class='input' type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
        <br></br><br></br>
        <input class='input' type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <br></br><br></br>
        <input class='input' type="number" maxLength="11" placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
        <br></br><br></br>
        <a href={`/contacts/2`}>
          <button onClick={addUsers} id='botao'>
              Adicionar Usuarios 
          </button>
        </a>
        <br></br><br></br>
        <a href={`/contacts/3`}><button id='botao'>Voltar</button></a>
        <br></br><br></br>
       
        <br></br>
      </div>
  
    </div>
  )
}

export default App