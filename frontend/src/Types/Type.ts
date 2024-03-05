export type User = {
    usuario: string,
    email: string,
    senha: string
}


export type Erro = {
    [key: string]: string
}
  
export const Validate = (data: User):Erro => {
  
    const Erros:Erro = {};
  
      if(!data.usuario){
          Erros['usuario'] = 'Preencha o campo de usuário vazio.'
      }
  
      if(!data.email){
        Erros['email'] = 'Preencha o campo de email vazio.'
    }
  
    if(!data.senha){
      Erros['senha'] = 'Preencha o campo de senha vazio.'
    }
  
    return Erros
  };

