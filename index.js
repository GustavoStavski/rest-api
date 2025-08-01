import express from 'express'

const Api = express();
let tabela = [];
Api.use(express.json());


Api.get('/usuario',(req,res) =>{
    res.send(`rota/usuario acessada com sucesso`)
})


Api.get('/usuarios/:id',(req,res)=>{
    const salvar = req.params.id;
    res.send(`/usuario ${salvar}`)
})

Api.post('/usuarios/criar/rota', (req,res)=>{
    const { name, email, idade } = req.body;
    if (!name || !email|| !idade){
        res.status(400).json({error:"deu erro"})
        return;
    
    }
    const user = {
        nome:name,
        gmail:email,
        anos:idade        
    }
    tabela.push(user);
    res.status(201).json({message:"Tudo certo"})
})

Api.get('/usuarios',(req,res)=>{
    res.status(201).json(tabela)
})

Api.listen(3000)