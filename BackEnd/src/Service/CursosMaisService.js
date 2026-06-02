import { pool } from '../config/db.js';
import 'dotenv/config';

const TABLE = 'tab_cursos';

class CursosService {

    async getAll() {
        try {
            const result = await pool.query(
                `SELECT * FROM ${TABLE} ORDER BY nome_curso`
            );
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar cursos:', error);
            throw new Error(error.message);
        }
    }

    async getById(id) {
        try {
            const result = await pool.query(
                `SELECT * FROM ${TABLE} WHERE id_curso = $1`,
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar curso por id:', error);
            throw new Error(error.message);
        }
    }

    async create(data) {
        try {
            const { nome_curso, tempo_curso, profe_curso, materia_curso } = data;
            const result = await pool.query(
                `INSERT INTO ${TABLE} (nome_curso, tempo_curso, profe_curso, materia_curso) 
                 VALUES ($1, $2, $3, $4) RETURNING *`,
                [nome_curso, tempo_curso, profe_curso, materia_curso]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar curso:', error);
            throw new Error(error.message);
        }
    }

    async update(id, data) {
        try {
            const { nome_curso, tempo_curso, profe_curso, materia_curso } = data;
            const result = await pool.query(
                `UPDATE ${TABLE} SET nome_curso = $1, tempo_curso = $2, 
                 profe_curso = $3, materia_curso = $4 
                 WHERE id_curso = $5 RETURNING *`,
                [nome_curso, tempo_curso, profe_curso, materia_curso, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar curso:', error);
            throw new Error(error.message);
        }
    }

    async patch(id, data) {
        try {
            const atual = await this.getById(id);

            if (!atual) throw new Error('Curso não encontrado');

            const nome_curso = data.nome_curso ?? atual.nome_curso;
            const tempo_curso = data.tempo_curso ?? atual.tempo_curso;
            const profe_curso = data.profe_curso ?? atual.profe_curso;
            const materia_curso = data.materia_curso ?? atual.materia_curso;

            const result = await pool.query(
                `UPDATE ${TABLE} SET nome_curso = $1, tempo_curso = $2, 
                 profe_curso = $3, materia_curso = $4 
                 WHERE id_curso = $5 RETURNING *`,
                [nome_curso, tempo_curso, profe_curso, materia_curso, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar parcialmente curso:', error);
            throw new Error(error.message);
        }
    }

    async delete(id) {
        try {
            const result = await pool.query(
                `DELETE FROM ${TABLE} WHERE id_curso = $1 RETURNING *`,
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao excluir curso:', error);
            throw new Error(error.message);
        }
    }
}

export default new CursosService();
