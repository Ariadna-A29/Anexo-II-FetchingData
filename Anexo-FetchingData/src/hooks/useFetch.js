
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function traerDatos() {
      if (!url) {
        setDatos(null);
        setError(null);
        setCargando(false);
        return;
      }

      try {
        setCargando(true);
        setError(null);
        setDatos(null);

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(
            respuesta.status === 404
              ? "No se encontraron los datos."
              : "Error del servidor: " + respuesta.status
          );
        }

        const json = await respuesta.json();

        if (!cancelado) {
          setDatos(json);
        }
      } catch (e) {
        if (!cancelado) {
          setError(e.message);
        }
      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    }

    traerDatos();

    return () => {
      cancelado = true;
    };
  }, [url]);

  return { datos, cargando, error };
}
