import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Crea un contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder al contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Observa el estado de autenticación para determinar si el usuario está autenticado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Limpia la suscripción cuando el componente se desmonta
  }, [auth]);

  // Define las funciones para el inicio de sesión y el cierre de sesión
  const login = async (email, password) => {
    // Lógica de inicio de sesión
  };

  const logout = async () => {
    // Lógica de cierre de sesión
  };

  // Proporciona el estado de autenticación y las funciones de inicio de sesión y cierre de sesión a los componentes hijos
  const contextValue = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
