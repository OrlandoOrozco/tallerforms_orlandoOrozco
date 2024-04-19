import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { PeliAdmin } from "../../componentes/peliculas/PeliculasAdmin";
import { PeliCre } from "../../componentes/peliculas/PeliculasCrear";
import { PeliLis } from "../../componentes/peliculas/PeliculasLista";
export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/pelidm" element={<PeliAdmin />} />
      
      <Route path="/pelicre" element={<PeliCre />} />
      <Route path="/pelilis" element={<PeliLis />} />
     
    </Routes>
  );
};
