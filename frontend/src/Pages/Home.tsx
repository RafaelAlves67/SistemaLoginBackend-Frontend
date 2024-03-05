import "./Home.css"


const Home = () => {
  return (
    <div className='Home'>
          <h1>Home da página</h1>

          <div>
              <h2>Faça as tentativas de Cadastro/Login</h2>
              
              <div className="div-func">
                <strong className="title-func">Funcionalides do sistema: </strong>
                <ul>
                  <li>Validação de existência de email já cadastrado;</li>
                  <li>Validação de campos vazios;</li>
                  <li>Autenticação de email e senha via Banco de dados</li>
                  <li>Context API para funções de login e logout;</li>
                </ul>
              </div>
          </div>
    </div>
  )
}

export default Home