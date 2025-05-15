const holaMundo = require("../Models.js");

exports.getholaMundo = async (req,res)=>{
    const holaMundo = await this.getholaMundo.find();
    res.jason()
};

exports.getholaMundo = async (req,res)=>{
    const holaMundo = new holaMundo(req,ReportBody);
    await holaMundo.save();
    res.json(holaMundo);
};





//exports.holaMundo = (req,res) => {
    //res.send("Hola desde el controlador")
//}

