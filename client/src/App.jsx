import "./App.css";
import {useState, useEffect} from "react";
import Header from "./components/header.jsx";
import GameTable from "./components/game-table.jsx";
import "@fontsource/black-ops-one";
import axios from "axios";

function App() {

  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/dorothea");
      setArray(response.data.drinks);
      console.log(response.data.drinks);
    }
    catch (error) {
      console.error("Fetch error", error.message);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAPI();
  }, []);

  return (
    <>
      <Header />
      <GameTable />
      {array.map((drinks, index) =>(
          <div key={index}>
            <p>{drinks}</p>
            <br></br>
          </div>
        ))}
    </>
  )
}

export default App
