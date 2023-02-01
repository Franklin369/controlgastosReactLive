import { Datosuser } from "../components/Datosuser";
import { NavBar } from "../components/NavBar";
import styled from "styled-components";
// import "./Home.css";
import { Btnnuevoregistro, Buttonfiltro } from "../components/Btnoperaciones";
import { Cardtotales } from "../components/Cardtotales";

import { TableBasic } from "../tables/TableBasic";
import { Registraringreso } from "../components/Formularios/Registraringreso";
import { useState } from "react";

import { UserAuth } from "../context/AuthContext";
import iconoyea from "../assets/react.svg";
//

export function Ingresos() {
  const [open, setOpen] = useState(false);

  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [openRegistro, SetopenRegistro] = useState(false);

  return (
    <Container className="container">
      <Registraringreso
        open={openRegistro}
        onClose={() => SetopenRegistro(false)}
      />
      <Header>
        <Datosuser user={user} />
      </Header>

      <Body>
        <ContentFiltros>
          <ButtonOperacion
            inputColor="#ed703f"
            text="Ingresos"
            textcolor="#fff"
            funcion={() => setOpen(!open)}
          />
          <div className="containerbtnfiltro">
            <Btnnuevoregistro
              inputColor="#fff"
              text="NUEVO INGRESOs"
              textcolor="#4CAF50"
              tipo="nuevo"
              funcion={() => SetopenRegistro(true)}
            />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
          </div>
        </ContentFiltros>
        <ContentTotales>
          <Cardtotales />
          <Cardtotales />
          <Cardtotales />

          <TableBasic />
        </ContentTotales>
      </Body>
      <div id="sidebar"></div>
    </Container>
  );
}
//#region STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  grid-gap: 0.2rem;
  font-weight: 800;
  font-size: 12px;
  color: #004d40;
  text-align: center;
  a {
    margin: 1rem;
  }
`;
const Body = styled.div`
  background: #84ffff;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
`;
const ContentFiltros = styled.div`
  min-height: 100px;
  width: 100vw;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .containerbtnfiltro {
    display: flex;
    flex-wrap: wrap;
  }
`;
const ContentTotales = styled.div`
  min-height: 100px;
  width: 100vw;
  background-color: black;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
`;
const Header = styled.nav`
  background: #a7ffeb;
  grid-area: nav;

  padding: 24px 30px;
  display: flex;
  justify-content: flex-end;
`;

//#endregion
