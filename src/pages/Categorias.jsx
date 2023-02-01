import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import {Btnnuevoregistro} from "../components/Btnoperaciones"
import {Registrarcategorias}from "../components/Formularios/Registrarcategorias"
export function Categorias() {
  const [open, setOpen] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  return (<Container >
<Registrarcategorias
        open={openRegistro}
        onClose={() => SetopenRegistro(false)}
      />
   <Btnnuevoregistro
              inputColor="#fff"
              text=""
              textcolor="#4CAF50"
              tipo="nuevo"
              funcion={() => SetopenRegistro(true)}
            />
<h1>Categorias</h1>
  </Container>);
}
const Container =styled.div`
  
`