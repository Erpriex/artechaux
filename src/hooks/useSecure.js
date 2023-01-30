import { useNavigate } from "react-router";
import { useAuth } from "./auth";
import { useEffect } from "react";

const useSecure = () => {
  const { state } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, state.isAuthenticated]);
};

export default useSecure;
