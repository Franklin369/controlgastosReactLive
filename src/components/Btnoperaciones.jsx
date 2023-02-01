import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { Icon } from "@rsuite/icons";
export function Btnnuevoregistro({ text, link, inputColor, textcolor, tipo,funcion }) {
  return (
    <a href={link} target="_blank">
      <Btn inputColor={inputColor} textcolor={textcolor} onClick={funcion}>
        <span className="containerText">
          <Icon as =  {(tipo==="nuevo")?CgMathPlus:IoIosArrowDown}/>
          <h6>{text}</h6>
        </span>
      </Btn>
    </a>
  );
}
const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  img {
    background-image: url(${(props) => props.inputColor});
  }
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 600;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.inputColor};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  @media (max-width: 48em) {
    /* font-size: ${(props) => props.theme.fontlg}; */
  }
`;
export function Buttonfiltro({ link, inputColor, textcolor, tipo }) {
  return (
    <a href={link} target="_blank">
      <Btnfiltro inputColor={inputColor} textcolor={textcolor}>
        <span className="containerText">
          <AiOutlineSearch />
        </span>
      </Btnfiltro>
    </a>
  );
}
const Btnfiltro = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 600;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  padding: 0px;

  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.inputColor};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  @media (max-width: 48em) {
    /* font-size: ${(props) => props.theme.fontlg}; */
  }
`;
const Btnflecha = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 600;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  padding: 0px;

  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.inputColor};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  @media (max-width: 48em) {
    /* font-size: ${(props) => props.theme.fontlg}; */
  }
`;
