import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ShowClient from "./pages/ShowClient";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ShowClient />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
