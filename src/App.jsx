import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SobreMim } from "./pages/SobreMim";
import { Menu } from "./components/Menu";
import { Rodape } from "./components/Rodape";
import { PaginaPadrao } from "./components/PaginaPadrao";
import { Post } from "./pages/Page/Index";
import { NaoEncontrada } from "./components/NaoEncontrada";

export function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<MainPage />}/>
          <Route path="Sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}