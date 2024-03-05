import "./Login.css"
import { useState } from "react"
import { useNavigate, Link} from "react-router-dom"
import { useContext } from "react"
import contextAuth from "../context/auth"



const Login = () => {

  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const Navigate = useNavigate();

  // context
  let {login} = useContext(contextAuth)

  // email e/ou senha incorretos
  const [error, setError] = useState<boolean>(false)
  const [erros, setErros] = useState<boolean>(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const userLogin = {email, senha}

    if(email.length === 0 || senha.length === 0){
        setErros(true)

        return;
    }

    setErros(false)
    
      try{
        const res = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(userLogin)
        })
  
        if(res.ok){
          console.log("Usuário Logado")
          setEmail("")
          setSenha("")
          login();
          Navigate('/')
        }else{
          console.log("Usuário não logado")
          setError(true)
        }
  
      }catch(error){
        console.log("Aconteceu o seguinte erro: " + error)
      }
  }

  return (
    <div>
          <div className="container-login">
          <h1>Faça Login</h1>

          <form className="form-login">
              <label>Email</label>
              <input type="email" placeholder="Informe seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              

              <label className="label-login">Senha</label>
              <input type="password" placeholder="Informe sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

              <button onClick={handleSubmit} className="button-login">Criar Conta</button>
              {error && <p>Email e/ou senha estão incorretos!</p>}
              {erros && <p>Os campos de Email e/ou Senha não podem ficar vazios!</p>}
              <p><Link to='/cadastrar'>Não tenho conta</Link></p>
          </form>
    </div>
    </div>
  )
}

export default Login