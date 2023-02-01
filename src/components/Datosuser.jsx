import styled from "styled-components";
export function Datosuser({user}) {
  
  return (
    <Container>
      <div className="imgContainer">
          <img src="https://i.ibb.co/8YBV3Zb/1200px-Charizard-SSBU.png" width={40}/>
      </div>
      
    

      <h1>{user.displayName}</h1>

    </Container>
  );
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  right:0;
  background-color:#A18AFF;

  .imgContainer{
    background-color:black;
    border-radius:50%;
    padding:10px;
    margin-right:20px;
  }
  h1{
    color:black;

  }

`
