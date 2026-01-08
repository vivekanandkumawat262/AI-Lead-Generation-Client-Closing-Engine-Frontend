import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  todos:[
    { id: 1, todo: "Sample Todo", completed: false },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
  token: null,
  role: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  /* ---------------- AUTH ---------------- */
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  /* ---------------- THEME ---------------- */
  const [themeMode, setThemeMode] = useState("light");

  /* 🔥 Restore state on refresh */
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));

    const storedUser = localStorage.getItem("user");
if (storedUser) {
  try {
    setUser(JSON.parse(storedUser));
  } catch (error) {
    console.error("Invalid user in localStorage", error);
    localStorage.removeItem("user");
  }
}

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  /* 🔥 Persist user */
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  /* 🔥 Persist & apply theme */
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  /* ---------------- METHODS ---------------- */
  const login = (token, role, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setToken(token);
    setRole(role);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setToken(null);
    setRole(null);
    setUser(null);
  };

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
  
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  useEffect(() => {
       const todos = JSON.parse(localStorage.getItem("todos"))

       if(todos && todos.length > 0) {
        setTodos(todos)
       }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <AuthContext.Provider
      value={{
        todos,
        addTodo,
        updatedTodo,
        deleteTodo,
        toggleComplete,
        themeMode,
        lightTheme,
        darkTheme,
        token,
        role,
        login,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
