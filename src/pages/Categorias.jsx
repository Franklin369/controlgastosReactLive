import { useState } from "react";
import styled from "styled-components";
import {Btnnuevoregistro} from "../components/Btnoperaciones"
import {Registrarcategoria}from "../components/Formularios/Registrarcategorias"
export function Categorias() {
const [openRegistro,setOpenRegistro] = useState(false);
  return (
    <Container>
        <Registrarcategoria open={openRegistro} onClose={()=>setOpenRegistro(false)}/>
    <Btnnuevoregistro inputColor="#fff"
    text="Agregar"
    textcolor="#4CAF50"
    tipo="nuevo"
    funcion={()=>setOpenRegistro(true)}/>

    </Container>
  );
}
const Container = styled.div``;
