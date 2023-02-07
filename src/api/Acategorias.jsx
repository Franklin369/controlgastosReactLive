import { db } from "./firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import swal from "sweetalert";
import { async } from "@firebase/util";

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

export async function Mostrartodo() {
  const data = [];
  const q = query(conexion);
  const rpt = await getDocs(q);
  rpt.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}
export async function EditarCategorias(p) {
  await updateDoc(doc(db, "categorias"), p);
}
export async function EliminarCategorias(id) {
  await deleteDoc(doc(db, "categorias", id));
}
