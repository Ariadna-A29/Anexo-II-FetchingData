
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function BuscadorPokemon() {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");

  const { datos: pokemon, cargando, error } = useFetch(url);

  function buscarPokemon() {
    const busqueda = nombre.trim().toLowerCase();

    if (!busqueda) {
      setUrl("");
      return;
    }

    setUrl(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(busqueda)}`
    );
  }

  return (
    <section>
      <h2>Buscador de Pokémon</h2>

      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del Pokémon"
      />

      <button onClick={buscarPokemon} disabled={cargando}>
        Buscar
      </button>

      {cargando && <p>Buscando...</p>}

      {error && <p role="alert">{error}</p>}

      {pokemon && !cargando && (
        <article>
          <h3>{pokemon.name}</h3>

          {pokemon.sprites.front_default && (
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="150"
            />
          )}

          <p>Tipos:</p>

          <ul>
            {pokemon.types.map((elemento) => (
              <li key={elemento.type.name}>
                {elemento.type.name}
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}
