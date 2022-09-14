import React from "react";
import Card from "./Componentes/Card";
import { Usuarios } from "./Helpers/Usuarios";
import "./styles.css";

const App = () => {
  return (
    <>
      <h1>Random Users</h1>
      <div className="userGrid">
        {Usuarios.map((user) => (
          <Card key={user.id} photo={user.photo} name={user.name} />
        ))}
      </div>
    </>
  );
};

export default App;
