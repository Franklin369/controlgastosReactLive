import styled from "styled-components";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import { useState } from "react";
export function Registrarcategoria({ open, onClose }) {
  if (!open) return;

  const {
    register,
    formState:{errors},
    handleSubmit,
  }=useForm();

  const [currentColor, setColor] = useState("#F44336");
  const appStyle = {
    color: currentColor,
    backgroundColor: currentColor,
  };
  const Elegircolor = (color) => {
    setColor(color.hex);
  };

  return (
    <Container>
      <section className="sub-container">
        <div className="header">
          <h1>Registrar nueva categoria</h1>
          <span onClick={onClose}>x</span>
        </div>
        <form className="formulario" >
          <div>
            <input placeholder="Nombre" type="text" {...register("descripcion",{required:true} )}></input>
            {errors.title?.type==="required" && <p>Campo obligatorio</p>}
          </div>
          <div className="colorContainer">
            <h3>Color de la categoría</h3>
            <span className="colorSelect" style={appStyle}></span>
            <CirclePicker color={currentColor} onChangeComplete={Elegircolor} />
          </div>
          <input type="submit"></input>
        </form>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(10, 9, 9, 0.5);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  .sub-container {
    width: 50%;
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    .header {
      display: flex;
    }
    .formulario {
      .colorContainer {
        .colorSelect {
          height: 50px;
          width: 50px;
          display: block;
        }
      }
    }
  }
`;
