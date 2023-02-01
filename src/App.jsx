import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Light } from "./styles/Themes";
import { Dark } from "./styles/Themes";
import { AuthContextProvider } from "./context/AuthContext";
import { Sidebar } from "./components/Sidebar";
import { v } from "./styles/variables";
import { UserAuth } from "./context/AuthContext";
export const ThemeContext = React.createContext(null);
import { Protected } from "./components/Protected";

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  const { user, logOut } = UserAuth();
  const conten = useRef();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
            
                {user?.displayName ? (
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                ) : null}
                <div className={user ? "bodycontent" : "null"}>
                   <MyRoutes />
                </div>
               
             
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  /* display:flex;
  flex-direction:row;
  position:relative;
  top: 0; */
  max-width: 100vw;
  min-height: 100vh;
  
  display: flex;
  /* grid-template-rows: auto auto; */
  transition: all 0.3s;
.bodycontent{
  transition: all 0.3s;
      height: 100%;
      width: 100%;
      padding-left:65px;
     
}
  .spotify__body {
    display: grid;
    grid-template-columns: auto auto;

    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.3s;
    /* &:hover{
      grid-template-columns: 5vw 85vw;
    } */
    /* &.active {
      grid-template-columns: 300px auto;
    } */
    .body {
      transition: all 0.3s;
      height: 100%;
      width: 100%;
    
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(56, 189, 60, 0.6);
        }
      }
    }
  }
`;
export default App;
