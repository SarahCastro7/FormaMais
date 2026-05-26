import { pool } from '../config/db.js';
import 'dotenv/config';

class FormaMaisService {

    async getAll() {
        try {
            const result = await pool.query (
                'SELECT * FROM forma_mais'
            );
 
        } catch (error) {
            console.error('erro ao listar forma_mais:', error);
            throw new Error('erro ao listar forma_mais'
            );
        }
    }

    async getById(id) {
        try {
            const result = await pool.query (
                'SELECT * FROM forma_mais WHERE id = $1',
                [id]
            );
        } catch (error) {
            console.error('erro ao buscar forma_mais por id:', error);
            throw new Error('erro ao buscar forma_mais por id');
        }   
    }

    async create(nome) {
        try {
            const { nome } = nome;
            const result = await pool.query (
                'INSERT INTO forma_mais (nome) VALUES ($1) RETURNING *',
                [nome]
            );
  
        } catch (error) {
            console.error('erro ao criar forma_mais:', error);
            throw new Error('erro ao criar forma_mais');
        }
    }

    async put(id, nome) {
        try {
            const result = await pool.query (
                'UPDATE forma_mais SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );
            
        } catch (error) {
            console.error('erro ao atualizar forma_mais:', error);
            throw new Error('erro ao atualizar forma_mais');
        }
    }

    async update(id, nome) {
        try {
            const { nome } = nome;
            const result = await pool.query (
                'UPDATE forma_mais SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );

        } catch (error) {
            console.error('erro ao atualizar forma_mais:', error);
            throw new Error('erro ao atualizar forma_mais');
        }
    }

    async delete(id) {
        try {
            const result = await pool.query (
                'DELETE FROM forma_mais WHERE id = $1 RETURNING *',
                [id]
            );
        
        } catch (error) {
            console.error('erro ao excluir forma_mais:', error);
            throw new Error('erro ao excluir forma_mais');
        }
    }
}

export default new FormaMaisService()