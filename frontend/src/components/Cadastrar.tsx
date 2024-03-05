import "./Cadastrar.css"
import { useState } from "react"
import { User, Validate, Erro } from "../Types/Type"

const Cadastrar = () => {

  // const [user, setUser] = useState<User[]>([])
  const [usuario, setUsuario] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  // errors
  const [error, setError] = useState<boolean>(false);
  const [erros, setErros] = useState<User | null | Erro>(null) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErros(null)

    const newUser = {usuario, email, senha}
    const validateErrosVoid = Validate(newUser);

    if(Object.keys(validateErrosVoid).length > 0){
        if(erros?.email){
          setError(false)
        }
        setErros(validateErrosVoid);
      return;
    }else{
      const res = await fetch(`http://localhost:3000/create`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
      })
    

      if(res.ok) {
          setEmail("")
          setSenha("")
          setUsuario("")
          setError(false)
      }

      if(res.status === 404){
        setError(true);
      }
    }
  }

  return (
    <div className="container-register">
          <h1>Registre-se</h1>

          <form onSubmit={handleSubmit} className="form-register">
              
              <label>Usuário</label>
              <input type="text" placeholder="Informe seu usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
              {erros && <p className="p-error">{erros.usuario}</p>}
              

              
              <label className="label-register">Email</label>
              <input type="email" placeholder="Informe seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              {erros && <p className="p-error">{erros.email}</p>}
              

              
              <label className="label-register">Senha</label>
              <input type="password" placeholder="Informe sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
              {erros && <p className="p-error">{erros.senha}</p>}
              

              <button>Criar Conta</button>
              {error && <p className="p-error">Email já existente!</p>}
          </form>
    </div>
  )
}

export default Cadastrar