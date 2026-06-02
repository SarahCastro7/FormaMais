import { pool } from '../config/db.js';
import 'dotenv/config';

class FormaMaisService {

    async getAll() {
        try {
            const result = await pool.query(
                'SELECT * FROM tab_usuarios ORDER BY id'
            );

            return result.rows;

        } catch (error) {
            console.error('Erro ao listar forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async getById(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM tab_usuario WHERE id = $1',
                [id]
            );

            return result.rows[0];

        } catch (error) {
            console.error('Erro ao buscar forma_mais por id:', error);
            throw new Error(error.message);
        }
    }

    async create(data) {
        try {
            const { nome } = data;

            const result = await pool.query(
                'INSERT INTO tab_usuario,formas  (nome) VALUES ($1) RETURNING *',
                [nome]
            );

            return result.rows[0];

        } catch (error) {
            console.error('Erro ao criar forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async update(id, data) {
        try {
            const { nome } = data;

            const result = await pool.query(
                'UPDATE forma_mais SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );

            return result.rows[0];

        } catch (error) {
            console.error('Erro ao atualizar forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async patch(id, data) {
        try {
            const atual = await this.getById(id);

            if (!atual) {
                throw new Error('Registro não encontrado');
            }

            const nome = data.nome ?? atual.nome;

            const result = await pool.query(
                'UPDATE forma_mais SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );

            return result.rows[0];

        } catch (error) {
            console.error('Erro ao atualizar parcialmente forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async delete(id) {
        try {
            const result = await pool.query(
                'DELETE FROM forma_mais WHERE id = $1 RETURNING *',
                [id]
            );

            return result.rows[0];

        } catch (error) {
            console.error('Erro ao excluir forma_mais:', error);
            throw new Error(error.message);
        }
    }
}

export default new FormaMaisService();