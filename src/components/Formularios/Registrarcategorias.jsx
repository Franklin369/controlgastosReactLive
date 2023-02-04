import styled from "styled-components";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import { useState } from "react";
import Emojipicker from "emoji-picker-react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import swel from "sweetalert";
import {Cargador} from "../Cargador";
import {
  InsertarCategorias,
  ValidardatosRepetidos,
} from "../../api/Acategorias";
export function Registrarcategoria({ open, onClose }) {
  if (!open) return;

  const [showPicker, setShowPicker] = useState(false);
  const [emojiSelect, setEmojiSelect] = useState("👄");
  const [valorRepetido, setValorRepetido] = useState(false);
  const [estadoProceso,setEstadoProceso] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [currentColor, setColor] = useState("#F44336");
  const appStyle = {
    color: currentColor,
    backgroundColor: currentColor,
  };
  const Elegircolor = (color) => {
    setColor(color.hex);
  };
  const seleccionarEmoji = (emojiObject) => {
    setEmojiSelect(() => emojiObject.emoji);
    setShowPicker(false);
  };
  const insertar = async (data) => {
    const p = {
      descripcion: data.descripcion,
      color: currentColor,
      icono: emojiSelect,
    };
    try {
      setEstadoProceso(true);
      const respuesta = await ValidardatosRepetidos(p);
      if (respuesta == 0) {
        await InsertarCategorias(p);
        onClose();
        swel("Datos guardados correctamente");
      } else {
        setEstadoProceso(false);
        setValorRepetido(true);
      }
    } catch (e) {
      setEstadoProceso(false);
      console.log(e);
    }
  };
  return (
    <Container>
      {valorRepetido && (
        <ContainerDatosRepetidos>
          <p>Ya tienes una categoría con ese nombre.</p>
        </ContainerDatosRepetidos>
      )}
      {
        estadoProceso &&<Cargador/>
      }
      <section className="sub-container">
        <div className="header">
          <h1>Registrar nueva categoria</h1>
          <span onClick={onClose}>x</span>
        </div>
        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <div>
            <input
              placeholder="Nombre"
              type="text"
              {...register("descripcion", { required: true })}
            ></input>
            {errors.descripcion?.type === "required" && (
              <p>Campo nombre obligatorio</p>
            )}
          </div>
          <div className="colorContainer">
            <h3>Color de la categoría</h3>
            <span className="colorSelect" style={appStyle}></span>
            <CirclePicker color={currentColor} onChangeComplete={Elegircolor} />
          </div>
          <div>
            <h3>Seleccione un icono</h3>

            <BsFillEmojiHeartEyesFill
              onClick={() => setShowPicker(!showPicker)}
            />
            <input type="text" value={emojiSelect}></input>
            {showPicker && <Emojipicker onEmojiClick={seleccionarEmoji} />}
          </div>

          <input type="submit" value="enviar"></input>
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
const ContainerDatosRepetidos = styled.div`
  width: auto;
  height: auto;
  background-color: #ff5722;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
  p {
    color: white;
  }
`;
