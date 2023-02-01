import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

export function Home() {
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const { user, logOut } = UserAuth();

  useEffect(() => {
    if (user) {
      console.log("entre");

      //  <Navigate to='/ingresos' />;
    }
  }, []);
  return (
    <div>
      <Container>
        <h1>Hola soy home</h1>
        {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="/login">Loguearse</Link>
        )}
      </Container>
    </div>
  );
}
const Container = styled.div``;
