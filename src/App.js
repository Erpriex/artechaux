import {AuthProvider} from "./hooks/auth";
import {DirectusProvider} from "./hooks/directus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/authentification/Register";
import Login from "./components/authentification/Login";

function App() {

  return (
    <BrowserRouter>
      <DirectusProvider>
        <AuthProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            {/* <Route path='logout' element={<logout />} /> */}
          </Routes>
        </AuthProvider>
      </DirectusProvider>
    </BrowserRouter>
  );
}

export default App;
