import getPool from "../../db/getpool.js";

export default async function confirmUserModel(token) {
    try {

        const pool = await getPool();

        const [[user]] = await pool.query(`SELECT * FROM users WHERE token = ?`,[token])

        if(!user) throw {
            status: 400,
            message: "Token no valido",
            code: "BAD REQUEST"
        }

        await pool.query(`UPDATE users SET token = ? WHERE token = ?`,[null, token])

        return {
            message : "Registro confirmado con exito"
        }
        
    } catch (error) {
        throw error
    }
}