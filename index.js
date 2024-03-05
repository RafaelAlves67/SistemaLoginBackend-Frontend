import express from 'express'
import cors from 'cors'
import Router from './routes/users.js' 

const app = express();

// DEFININDO A PORTA DO SERVIDOR
app.listen(3000);

// DEFININDO O APP PARA LER JSON
app.use(express.json())

// USAR O CORS PARA CONSEGUIR CONECTAR COM O FRONT-END
app.use(cors())

// APLICANDO AS ROTAS PARA o app (express)
app.use("/", Router)
