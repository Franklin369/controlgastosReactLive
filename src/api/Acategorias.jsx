import { db } from "./firebase.config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import swal from "sweetalert";

const conexion = collection(db, "categorias");
export async function InsertarCategorias(p) {
  try {
    await addDoc(conexion, p);
  } catch (e) {
    console.log(e);
  }
}
export async function ValidardatosRepetidos(p) {
  try {
    const info = [];
    const q = query(
      collection(db, "categorias"),
      where("descripcion", "==", p.descripcion)
    );
    const queryConsulta = await getDocs(q);
    queryConsulta.forEach((doc) => {
     
      info.push(doc.data());
      
    });
    return info.length;
  } catch (e) {
    console.log(e);
  }
}
