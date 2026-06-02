import { pool } from '../config/db.js';
import 'dotenv/config';

class FormaMaisService {

    async getAll() {
        try {
            const result = await pool.query(
                'SELECT * FROM public.tab_usuario ORDER BY id_usuario'
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
                'SELECT * FROM tab_usuario WHERE id_usuario = $1', // ✅ corrigido
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
                'INSERT INTO tab_usuario (nome) VALUES ($1) RETURNING *', // ✅ corrigido
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
                'UPDATE tab_usuario SET nome = $1 WHERE id = $2 RETURNING *', // ✅ corrigido
                [nome, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async patch(tab_usuario, data) {
        try {
            const atual = await this.getBy_usuario(_usuario);

            if (!atual) {
                throw new Error('Registro não encontrado');
            }

            const nome = data.nome ?? atual.nome;

            const result = await pool.query(
                'UPDATE tab_usuario SET nome = $1 WHERE _usuario = $2 RETURNING *', // ✅ corrig_usuarioo
                [nome, _usuario]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar parcialmente forma_mais:', error);
            throw new Error(error.message);
        }
    }

    async delete(id_usuario) {
        try {
            const result = await pool.query(
                'DELETE FROM tab_usuario WHERE id = $1 RETURNING *', // ✅ corrigido
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