import express from 'express';
import cursosService from '../Service/CursosService.js';

export const CursosRoute = express.Router();

// GET ALL
CursosRoute.get('/', async (req, res) => {
    try {
        const cursos = await cursosService.getAll();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET BY ID
CursosRoute.get('/:id', async (req, res) => {
    try {
        const curso = await cursosService.getById(req.params.id);
        if (!curso) return res.status(404).json({ message: 'Curso não encontrado' });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST
CursosRoute.post('/', async (req, res) => {
    try {
        const curso = await cursosService.create(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT
CursosRoute.put('/:id', async (req, res) => {
    try {
        const curso = await cursosService.update(req.params.id, req.body);
        if (!curso) return res.status(404).json({ message: 'Curso não encontrado' });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PATCH
CursosRoute.patch('/:id', async (req, res) => {
    try {
        const curso = await cursosService.patch(req.params.id, req.body);
        if (!curso) return res.status(404).json({ message: 'Curso não encontrado' });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
CursosRoute.delete('/:id', async (req, res) => {
    try {
        const curso = await cursosService.delete(req.params.id);
        if (!curso) return res.status(404).json({ message: 'Curso não encontrado' });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});