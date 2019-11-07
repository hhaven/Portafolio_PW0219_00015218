const Registro = require("../models/register")

//find all

const getAll = (req,res)=>{
    Registro.find((err,registro)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registro});
    })
}

//find one
const getOneById = (req,res)=>{
    Registro.findById(req.params.id,(err,registro)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registro});
    })
}

//insert
const insert = (req,res)=>{
    let registro = new Registro({
        carnet:req.body.carnet,
        schedule: req.body.schedule,
        isLate:req.body.isLate
    });
    registro.save((err)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        res.status(201).json({mensaje:"naisu"})
    });
}

//update
const update = (req,res)=>{

}

//delete
const del = (req,res)=>{

}