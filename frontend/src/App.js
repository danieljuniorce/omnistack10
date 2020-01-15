import React, { useState, useEffect } from "react";
import api from "./services/api";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

import "./assets/css/App.css";
import "./assets/css/Sidebar.css";
import "./assets/css/Main.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm setDevs={setDevs} devs={devs} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
