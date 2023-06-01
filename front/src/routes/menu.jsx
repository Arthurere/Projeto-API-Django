import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styleMenu.css'

const Menu = () => {
  const [data, setData] = useState([]);

  function renderizar (){
    axios.get(`http://127.0.0.1:8000/alunos/`)
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  }

  useEffect(renderizar,[]);

  return (
    <div id='fundo'>
      <h1>Menu</h1>
      {data.map(item => (
        <div key={item.id}id= {item.id} className='usuario'>
          <h3>{item.nome}</h3>
          <p>{item.email}</p>
          
        <button onClick= { e =>{axios.delete(`http://127.0.0.1:8000/alunos/${e.target.parentElement.id}/`);renderizar()}} className='botao'> Delete </button>
        <br></br><br></br>
        </div>
      ))}
      <br></br><br></br>
       <a href={`/contacts/3`}><button className='botao'>Voltar</button></a>
       
    </div>
  );
};

export default Menu;