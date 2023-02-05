import { useState } from "react";
import styled from "styled-components";
import { Btnnuevoregistro } from "../components/Btnoperaciones";
import { Registrarcategoria } from "../components/Formularios/Registrarcategorias";
import { Mostrartodo } from "../api/Acategorias";
import { useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";

import TableHead from "@mui/material/TableHead";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

import { async } from "@firebase/util";
export function Categorias() {
  const [openRegistro, setOpenRegistro] = useState(false);
  const [dataCategorias, setDataCategorias] = useState([]);
  const [dataSelect,setDataselect] = useState([])
  async function mostrarCategorias() {
    const rpt = await Mostrartodo();
    setDataCategorias(rpt);
  }
  function editar (data){
    setOpenRegistro(!openRegistro);
    setDataselect(data);

  }


  useEffect(() => {
    mostrarCategorias();
  }, []);

  return (
    <Container>
      <Registrarcategoria dataSelect={dataSelect}
        open={openRegistro}
        onClose={() => setOpenRegistro(false)}
      />
      <Btnnuevoregistro
        inputColor="#fff"
        text="Agregar"
        textcolor="#4CAF50"
        tipo="nuevo"
        funcion={() => setOpenRegistro(true)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Icono</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <TableBody>
          {dataCategorias.map((row) => {
            return (
              <TableRow>
                <TableCell align="left">{row.descripcion}</TableCell>
                <TableCell align="left">{row.icono}</TableCell>
                <TableCell align="left"><Colorcontent color={row.color}/></TableCell>
                <TableCell align="left">
                  <Stack direction="row">
                    <BiEditAlt onClick={()=>editar(row)}/>
                    <RiDeleteBin2Line />
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5, 10, 15, 25]}></TablePagination>
    </Container>
  );
}
const Container = styled.div``;
const Colorcontent=styled.div`
  height:25px;
  width:25px;
  border-radius:50%;
  background-color:${(props)=>props.color};

`
