import styled from "styled-components";
export function Cargador() {
  return (
    <Container>
      <div class="wrapper">
        <div class="spinner spinner7"></div>
        <h2>Guardando registros...</h2>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #f4d463;
  transform:all 0.3s;
  .wrapper {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

   

    .spinner {
      width:20rem;
      height: 20rem;
    }
    .spinner7 {
      position: relative;
      &::before,
      ::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
      }
      &::before {
        background: #fff;
        -webkit-animation: pulse2 2s ease-in-out infinite;
        animation: pulse2 2s ease-in-out infinite;
      }
      &::after {
        background: #fff;
        -webkit-animation: pulse2 2s 1s ease-in-out infinite;
        animation: pulse2 2s 1s ease-in-out infinite;
      }
    }
  }
  @keyframes pulse2 {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }

 
`;
