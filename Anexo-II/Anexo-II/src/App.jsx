import BuscadorPokemon from "./ejercicios//BuscadorPokemon";
import Notas from "./ejercicios/Anexo/componentes/Notas";

function App() {
  return (
    <main>
      <h1>Prácticas de Fetch y HTTP</h1>

      <section>
        <h2>Ejercicio: Perfil de GitHub</h2>
        <PerfilGitHub />
      </section>

      <hr />

      <section>
        <h2>Ejercicio: Buscador Pokémon</h2>
        <BuscadorPokemon />
      </section>

      <hr />

      <section>
        <h2>Ejercicio: Notas</h2>
        <Notas />
      </section>
    </main>
  );
}

export default App;