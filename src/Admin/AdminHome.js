import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { Button } from "@material-ui/core";

import { Typography } from "@material-ui/core";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  const button = authState.isAuthenticated ? (
    <Button
      style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "80px" }}
      variant="contained"
      color="primary"
      onClick={() => {
        oktaAuth.signOut();
      }}
    >
      Logout
    </Button>
  ) : (
    <button
      onClick={() => {
        history.push("/login");
      }}
    >
      Login
    </button>
  );

  return (
    <div style={{ marginLeft: "20px", height: "78vh" }}>
      <Typography
        style={{ marginLeft: "20px", marginTop: "80px" }}
        variant={"body1"}
      >
        Bem-vinda Laura ao console de administração:
      </Typography>
      <Typography
        style={{ marginLeft: "20px", marginTop: "20px" }}
        variant={"h4"}
      >
        FILME
      </Typography>

      <Typography
        style={{ marginLeft: "20px", marginTop: "20px" }}
        variant={"body1"}
      >
        <Link style={{ marginTop: "10px" }} to="/new/movie">
          Adicionar Filme
        </Link>
      </Typography>

      <Typography
        style={{ marginLeft: "20px", marginTop: "20px" }}
        variant={"body1"}
      >
        <Link style={{ marginTop: "10px" }} to="/busquedaavancada">
          Editar ou excluir Filme: Busqueda Avançada
        </Link>
      </Typography>

      <Typography
        style={{ marginLeft: "20px", marginTop: "40px" }}
        variant={"h4"}
      >
        NOVIDADES
      </Typography>

      <Typography
        style={{ marginLeft: "20px", marginTop: "20px" }}
        variant={"body1"}
      >
        <Link style={{ marginTop: "10px" }} to="/news">
          Gerenciar Novidades
        </Link>
      </Typography>

      <Typography
        style={{ marginLeft: "20px", marginTop: "40px" }}
        variant={"h4"}
      >
        PESSOAS
      </Typography>
      <Typography
        style={{ marginLeft: "20px", marginTop: "20px" }}
        variant={"body1"}
      >
        <Link style={{ marginTop: "10px" }} to="/new/people">
          Buscar ou Adicionar Pessoa
        </Link>
      </Typography>

      {button}
    </div>
  );
};
export default Home;
