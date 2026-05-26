import express from 'express';
import { FormaMaisRoute } from './routes/FormaMaisRoutes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/' , (req,res) => {
    res.send("src");
});

app.use('/formas' , FormaMaisRoute);

app.listen(PORT, () => {
    console.log (`server rodando aq http://localhost:${PORT}`);
})