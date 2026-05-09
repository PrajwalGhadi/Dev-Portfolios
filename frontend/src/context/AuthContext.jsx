import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getUser = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/auth/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        setError(`Failed to fetch user: ${response.statusText}`);
        throw new Error(`Failed to fetch user: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("User data fetched:", data);
      setUser(data.user);
      return data;
    } catch (error) {
      setError(error.message);
      throw new Error(`Failed to fetch user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Login failed response:", data);
        setError(data.errors)
        return data
      }

      console.log(response);
      return await getUser();
    } catch (error) {
      setError(error.message);
      throw new Error(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
       try {
      setLoading(true)
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Login failed response:", data);
        !error ? setError([...data.errors]) : setError(prev => prev.push(...data.errors));
        return data
      }

      console.log(response);
      return await getUser();
    } catch (error) {
      setError([...data.errors]);
      throw new Error(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError(`Logout failed: ${response.statusText}`);
        throw new Error(`Logout failed: ${response.statusText}`);
      }

      setUser(null);
    } catch (error) {
      setError(error.message);
      throw new Error(`Logout failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    error,
    setError,
    login,
    register,
    logout,
    clearError
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

// Custom hook for easy consumption
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
