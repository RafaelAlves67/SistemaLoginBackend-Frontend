import "./About.css"

const About = () => {
  return (
    <div className='about'>
    <h1>Home da página</h1>

    <div className="about-container">
        <h2>Sobre o Projeto</h2>
        
        <div className="div-func">
              <p>Projeto feito por Rafael Alves em 02/2024 para treinamento de Node Js e React Js trabalhando juntos que simula um formulário de login e cadastro com validações e autenticação.</p>
              <h3>Realizações feitas: </h3>
              <ul>
                  <li>API Feita com Node Js e MySQL</li>
                  <li>Front-End feito com React Js e Typescript</li>
                  <li>Express no node</li>
                  <li>Projeto criado em Vite</li>
              </ul>

              <h3>Futuras realizações a serem feitas: </h3>

              <ul>
                <li>Usar o siquelize para o conectar o banco de dados</li>
                <li>Utilizar padrão MVC</li>
                <li>Fazer Deploy do projeto</li>
                <li>Colocar o banco de dados MySQL na nuvem</li>
              </ul>
        </div>
    </div>
</div>
  )
}

export default About