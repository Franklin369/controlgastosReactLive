import { db } from "./firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const conexion = collection(db, "ingresos");
export async function Mostrartodos() {
  return getDocs(conexion);
}
export async function Insertaringreso(p) {
  try {
    await addDoc(collection(db, "ingresos"), p);
    onClose();
  } catch (err) {
    swal("hola");
  }
}
