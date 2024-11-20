import { useEffect, useState } from "react";
import FotoAmpliada from "./components/FotoAmpliada";
import FotosList from "./components/FotosList";
import Pesquisar from "./components/Pesquisar";

import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategoty] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [search, setSearch] = useState(false);

  const fetchData = async (query, category) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = query;

      if (query && category) {
        searchQuery = `${query} ${category}`;
      } else if (category) {
        searchQuery = category;
      }

      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: apiKey,
            query: searchQuery,
          },
        });
        setFotos(res.data.results);
        return;
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      const res = await axios.get(`https://api.unsplash.com/photos/random`, {
        params: {
          client_id: apiKey,
          count: 16,
        },
      });
      setFotos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(category, query);
  }, []);

  useEffect(() => {
    if (search) {
      fetchData(query, category);
      setSearch(false);
    }
  }, [search]);
  return (
    <div className="container">
      <h1>Imagens Aleatórias</h1>
      <Pesquisar
        setQuery={setQuery}
        setCategoty={setCategoty}
        setSearch={setSearch}
      />
      <FotosList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App;
