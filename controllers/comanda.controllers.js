import ComandaModel from "../Models/Models.js";
const  traerComandas = async (req,res)=>{ 
    try {
    const comandas = await ComandaModel.find({}); // busca todas las comandas en la colección
    res.json(comandas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al traer las comandas", error });
  }
};

const comanda = {
  guardarComanda: (req, res) => {
    const { mesa, comensales, BtnDisponibilidad } = req.body;

    if (mesa && comensales && BtnDisponibilidad !== undefined) {
      res.status(201).json({
        data: {
          mesa,
          comensales,
          BtnDisponibilidad
        }
      });
    } else {
      res.status(400).json({ message: "Faltan datos en la comanda" });
    }
  },

  traerComandas: (req, res) => {
    res.json({ message: "Aquí irían las comandas guardadas" });
  }
};

export default comanda;


// export async function getholaMundo(req,res){
//     const holaMundo = new holaMundo(req,ReportBody);
//     await holaMundo.save();
//     res.json(holaMundo);
// }





// exports.holaMundo = (req,res) => {
//     res.send("Hola desde el controlador")
// }

