import { AuthProvider } from "./hooks/auth";
import { DirectusProvider } from "./hooks/directus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentification from "./pages/Authentification";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/authentification/Logout";

function App() {
  return (
    <BrowserRouter>
      <DirectusProvider>
        <AuthProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Authentification login={true} />} />
            <Route path='register' element={<Authentification login={false} />} />
            <Route path='logout' element={<Logout />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </DirectusProvider>
    </BrowserRouter>
  );
}

export default App;
