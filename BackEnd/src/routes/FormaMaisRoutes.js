import express from 'express';
import formaService from '../Service/FormaMaisService.js'
import { Result } from 'pg';

export const FormaMaisRoute = express.Router();

//aqui fica o get all 
FormaMaisRoute.get('/', async (req, res) => {
    try {
        const formas = await formaService.getAllFormas();
        res.json(formas);
    } catch (error) {
        console.error('erro ao listar formas:', error);
        res.status(500).json({ message: error.message });
    }
});

//getById 

FormaMaisRoute.get('/:id', async (req, res) => {
    try {
        const forma = await formaService.getFormaById(req.params.id);
        res.json(forma);
    } catch (error) {
        console.error('erro ao buscar forma por id: ', error);
        res.status(500).json({ message: error.message });
    }
});

//post

FormaMaisRoute.post('/', async (req, res) => {
    try {
        const forma = await formaService.createForma(req.body);
        res.status(201).json(forma);
    } catch (error) {
        console.error('erro ao criar forma: ', error);
        res.status(500).json({ message: error.message });
    }
});

//put

FormaMaisRoute.put('/:id', async (req, res) => { 
    try {
        const forma = await formasService.updateForma(req.params.id, req.body);
        res.json(forma);
    } catch (error) {
        console.error('erro ao atualizar forma: ', error);
        res.status(500).json({ message: error.message });
    }
});

//patch 

FormaMaisRoute.patch('/formas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const forma = await formasService.patchForma(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        console.error('erro ao atualizar forma: ', error);
        res.status(500).json({ message: error.message });
    }
});

//delete

FormaMaisRoute.delete('/:id', async (req, res) => {
    try {
        const forma = await formasService.deleteForma(req.params.id);
        res.json(forma);
    } catch (error) {
        console.error('erro ao excluir forma: ', error);
        res.status(500).json({ message: error.message });
    }
});

