import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Ingresos } from "../pages/Ingresos";
import { Products } from "../pages/Products";
import { Reports } from "../pages/Reports";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Account } from "../pages/Account";
import { Protected } from "../components/Protected";
import { UserAuth } from "../context/AuthContext";
import { Sidebar } from "../components/Sidebar";
import {Categorias} from "../pages/Categorias"
export function MyRoutes() {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            
             <Home />
          </RequireAuth>
           
        }
      />
      <Route path="/categorias" element={<Categorias/>}/>
      <Route path="/login" element={<Login />} />

      <Route exact path="/ingresos" element={<Ingresos />} />
     
      <Route
        exact
        path="/account"
        element={
          <Protected>
            
            <Account />
          </Protected>
        }
      />

      {/* <Route exact path="/" element={<Home />} />
       */}
    </Routes>
  );
}
