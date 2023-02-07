import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Mostrartodo } from "../api/Acategorias";
import { Btnnuevoregistro } from "../components/Btnoperaciones";

import { Registrarcategorias } from "../components/Formularios/Registrarcategorias";
import { Tablacategorias } from "../components/Tables/Tablacategorias";
export function Categorias() {
  const [dataCategorias, setDataCategorias] = useState([]);
  const [titleForm, setTitleform] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [open, setOpen] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [estadoMostrar, setEstadoMostrar] = useState(false);
  const mostrarCategorias = async () => {
    const rpt = await Mostrartodo();
    setDataCategorias(rpt);
  };
  useEffect(() => {
    mostrarCategorias();
  }, [estadoMostrar]);
  function nuevoRegistro() {
    SetopenRegistro(true);
    setTitleform("Registrar categoria");
    setAccion("Nuevo");
  }
  return (
    <Container>
      <Registrarcategorias 
        title={titleForm}
        open={openRegistro}
        onClose={() => SetopenRegistro(false)}
        dataSelect={dataSelect}
        accion={accion}
        estadoMostrar={()=>setEstadoMostrar(!estadoMostrar)}
      />
     
      <Btnnuevoregistro
        inputColor="#fff"
        text=""
        textcolor="#4CAF50"
        tipo="nuevo"
        funcion={nuevoRegistro}
      />
      <h1>Categorias</h1>

      <Tablacategorias estadoMostrar={()=>setEstadoMostrar(!estadoMostrar)}
        openRegistro={SetopenRegistro}
        rows={dataCategorias}
        dataSelect={setdataSelect}
        setTitleform={setTitleform} setAccion={setAccion}
      />

     
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  background-color: #edf3fb;
  padding-left: 20px;
`;
