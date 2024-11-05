import express from "express";

const data=[
    {"id":1,"name":"name1"  ,"rol":"hola"  },
    {"id":2,"name":"name2"  ,"rol":"hola1"  },
    {"id":3,"name":"name3"  ,"rol":"hola2"  }
];

const app=express();
const PORT=8080;

app.listen(PORT,()=>{console.log(`Server listen on http://localhost:${PORT}`);
})
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{res.send(`HOla mundo inicial`)})

app.get("/saludo/:param1/:param2",(req,res)=>{
    let parametros=req.params;
    res.send(`HOla mundo inicial: ${parametros.param1},${parametros.param2}`)
})

app.get("/datos",(req,res)=>{
    res.send(data);
    })

    app.get("/datos/:id",(req,res)=>{
        const id=req.params.id;
        const usuario=data.find(elem=>elem.id==id);
        if(usuario){
        res.send(usuario);
        }else{
        res.status(404).send("No se encontró el usuario");
        }
        })

        app.get("/request",(req,res)=>{
            let parametros=req.params;
            const consulta=req.query;
            res.send(consulta);
            })