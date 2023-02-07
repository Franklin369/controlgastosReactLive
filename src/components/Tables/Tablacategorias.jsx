import styled from "styled-components";

import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Stack from "@mui/material/Stack";

import { GrEdit } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";

import swal from "sweetalert";
import { EliminarCategorias } from "../../api/Acategorias";
import { async } from "@firebase/util";

export function Tablacategorias({
  rows,
  openRegistro,
  dataSelect,
  setTitleform,
  setAccion,
  estadoMostrar,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const filterData = (v) => {};
  function editar(data) {
    openRegistro(true);
    dataSelect(data);
    setTitleform("Editar categoria");
    setAccion("Editar");
  }
  function eliminar(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await EliminarCategorias(id);
        estadoMostrar();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <>
      {rows.length > 0 && (
        <Container>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Nombre
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Icono
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Color
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Acciones
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, key) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                      <TableCell align="left">{row.descripcion}</TableCell>
                      <TableCell align="left">
                        <Iconocontent>{row.icono}</Iconocontent>
                      </TableCell>
                      <TableCell align="left">
                        <Colorcontent color={row.color} />{" "}
                      </TableCell>

                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <GrEdit
                            style={{
                              fontSize: "18px",
                              color: "#b8b8b8",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            onClick={() => editar(row)}
                          />
                          <RiDeleteBin2Line onClick={()=>eliminar(row.id)}
                            style={{
                              fontSize: "20px",
                              color: "#a09396",
                              cursor: "pointer",
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100, 150, 200]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 20px;
  padding: 12px;
  margin: 20px;
  box-shadow: -6px 4px 33px -8px rgba(74, 74, 74, 0.79);
  -webkit-box-shadow: -6px 4px 33px -8px rgba(74, 74, 74, 0.79);
  -moz-box-shadow: -6px 4px 33px -8px rgba(74, 74, 74, 0.79);
`;
const Colorcontent = styled.div`
  height: 25px;
  width: 25px;
  display: block;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const Iconocontent = styled.span`
  font-size: 30px;
`;
