import './styleHome.css'
export default function Home() {
    return (
      <>
        
            <div id="menu">
            <h1>HOME</h1>
            <br></br>
            <nav>
                  <a href={`/contacts/1`}><button id='botao'>Novo Cadastro</button></a>
                  <br></br><br></br>
                  <a href={`/contacts/2`}><button id='botao'>Menu</button></a>
                  <br></br><br></br>
                  <a href={`/`}><button id='botao'>Voltar</button></a>
                  
            </nav>
            </div>
        
      </>
    );
  }