// versao 2022/06/26 - funcionando
// PROJETO DEVSUPERIOR - DSVENDAS E DSFILMES VERSAO FINAL ACESSO PRD EM CLOUD BB E FRONT ENDE.OK
// versao 20220626- funcionando, falta ajustar formulario de score de pontos de filmes -v001

import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "Pages/Home";
import Dashboard from "Pages/Dashboard";
// import Pagina01 from "pages/pagina01";
// import Pagina02 from "pages/pagina02";
// import Pagina03 from "pages/pagina03";
// import Cadvendas2 from "pages/Cadvendas2";
// import FormCard from "pages/FormCard";


// Layout comum para todas as páginas
const MainLayout = () => {
  return (
    <>

       <div className="container"></div>
      <main>
        <Outlet /> {/* Aqui as páginas serão renderizadas */}
      </main>
      
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/pagina01" element={<Pagina01 />} /> */}
          {/* <Route path="/pagina02" element={<Pagina02 />} /> */}
          {/* <Route path="/pagina03" element={<Pagina03 />} /> */}
          {/* <Route path="/cadvendas2" element={<Cadvendas2 />} /> */}
          {/* <Route path="/formcard" element={<FormCard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
