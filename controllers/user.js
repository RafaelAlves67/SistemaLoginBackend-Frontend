import {db} from '../data/db.js'
import bcrypt from 'bcrypt'

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (error, data) => {
            if(error){
               return res.status(404).json("Erro de requisição GET")
            }
            return res.status(200).json(data)
    })
}

export const getUsersId = (req, res) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const id = req.params.id

    db.query(sql, id,(error, data) => {
            if(error){
               return res.status(404).json("Erro de requisição GET")
            }
            return res.status(200).json(data)
    })
}

export const postUsers = async (req, res) => {
    try {
        const email = req.body.email
        const checkEmailSql = `SELECT * FROM users WHERE email = "${email}"; `
        const checkEmailResult = await new Promise((resolve, reject) => {
            db.query(checkEmailSql, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        if (checkEmailResult.length > 0) {
            return res.status(404).json("Email já existente");
        } else {
            const sql = "INSERT INTO users SET ?";
            const newUser = req.body;

            db.query(sql, newUser, (error, data) => {
                if (error) {
                    return res.status(404).json("Erro na requisição POST");
                }
                return res.status(200).json(data);
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json("Erro interno do servidor");
    }
};
 

export const putUsers =  (req, res) => {
    const sql = "UPDATE users SET ? WHERE id = ?;"
    const id = req.params.id
    const userPut = req.body

    db.query(sql, [userPut, id], (error, data) => {
        if(error){
            console.log(error)
            return res.status(404).json("Erro na requisição PUT")
        }

        return res.status(200).json(data)
    })
}

export const deleteUsers = (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?"
    const id = req.params.id

    db.query(sql, id, (error, data) => {
        if(error){
            return res.status(404).json("Erro na requisição DELETE")
        }

        return res.status(200).json(data)
    })
}


export const authLogin = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Consulta parametrizada para evitar injeção de SQL
        const authUser = 'SELECT * FROM users WHERE email = ? and senha = ?;';
        db.query(authUser, [email,senha], async (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json("Erro interno do servidor");
            }
                        
            if (results.length > 0) {
                // Atualize o status de logon do usuário
                const updateSql = 'UPDATE users SET logged = 1 WHERE email = ? and senha = ?;';
                db.query(updateSql, [email, senha], (error, data) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json("Erro interno do servidor");
                    }
                    return res.status(200).json("Usuário logado com sucesso!");
                });
            } else {
                return res.status(404).json("Email e/ou senha estão incorretos!");
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Erro interno do servidor");
    }
};
