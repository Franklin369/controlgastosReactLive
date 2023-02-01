import styled from "styled-components";

export function Menudesplegable({estado, Onclose}) {
  if (estado===false) return;
  return (<Container >
    <button onClick={Onclose}>cerrar</button>
  </Container>);
}
const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #16151a;
  position: absolute;
  border-radius: 20px;
  left: 18px;
  top: 40px;
  z-index: 10000;
`;
