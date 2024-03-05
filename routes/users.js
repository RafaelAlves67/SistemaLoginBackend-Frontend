import express from 'express'
import { getUsers, postUsers, getUsersId, putUsers, deleteUsers, authLogin } from '../controllers/user.js';

const router = express.Router();

//ROTAS
router.get("/", getUsers); // puxar todos usuarios
router.get("/:id", getUsersId); // puxar usuario pelo id
router.post("/create", postUsers) // criar usuario 
router.put("/:id", putUsers) // editar usuario 
router.delete("/:id", deleteUsers) // excluir usuario 
router.post("/login", authLogin) // autenticação de login

export default router


