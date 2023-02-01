import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Insertaringreso } from "../../api/Aingresos";
import swal from "sweetalert";

import { db } from "../../api/firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
export function Registraringreso({ open, onClose }) {
  if (!open) return;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const Enviar2 = async (data) => {
    swal(data);
    const p = {
      descripcion: data.descripcion,
      estado: "descriptiosn",
      monto: data.monto,
      fecha: "hola",
      idcategoria: "1",
      idcuenta: "2",
    };

    try {
      await Insertaringreso(p);
      // await addDoc(collection(db, "ingresos"), {

      // });

      onClose();
      swal("Registrado correctamente");
    } catch (err) {}
  };

  return (
    <Container onClick={onClose}>
      <div
        className="sub-contenedor"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">
          <h1>Nuevo ingreso</h1>
          <span onClick={() => onClose()}>x</span>
        </div>

        <form onSubmit={handleSubmit(Enviar2)}>
          <div>
            <label>Monto</label>
            <input
              type="number"
              {...register("monto", { required: true })}
            ></input>
            {errors.title?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <div>
            <label>Estado</label>
            <input type="checkbox" {...register("estado")}></input>
          </div>
          <div>
            <label>Fecha</label>
            <input
              type="date"
              {...register("fecha", { required: true })}
            ></input>
            {errors.title?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <div>
            <label>Descripcion</label>
            <input
              type="text"
              {...register("descripcion", { required: true })}
            ></input>
          </div>
          <div>
            <label>Categoria</label>
            <input
              type="number"
              {...register("idcategoria", { required: true })}
            ></input>
            {errors.title?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <div>
            <label>Cuenta</label>
            <input
              type="number"
              {...register("idcuenta", { required: true })}
            ></input>
            {errors.title?.type === "required" && <p>El campo es requerido</p>}
          </div>

          <input type="submit" value="enviar" onClick={onclose}></input>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000000;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .sub-contenedor {
    width:50%;
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0px 5px 10px rgba(240, 249, 250, 0.5);
    margin: 0px 20px;
    .contenido {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 20px;
      flex: auto;
      .icon {
        margin-right: 10px;
      }
      .mensaje {
        .title {
          font-weight: bolder;
        }
      }
    }
    .actions {
      padding: 10px 0;
      display: flex;
      justify-content: end;
      gap: 10px;
      button {
        border: none;
        padding: 15px;
        min-width: 120px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
      .btn-descargar {
        background-color: #029be1;
        color: white;
        &:hover {
          background-color: #0280de;
        }
      }
      .btn-volver {
        background-color: white;
        border: solid 1px #ccc;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
`;
