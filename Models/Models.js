import mongoose from "mongoose";


const ComandasSchema = new mongoose.Schema({
  mesa: { type: Number, required: true },
  comensales: { type: String, required: true },
  BtnDisponibilidad: { type: Boolean, default: true },
});

export default mongoose.model("comanda", ComandasSchema);
