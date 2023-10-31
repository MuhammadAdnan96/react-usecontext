import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Protected from "./Utils/protected-route";
import "./App.css";

export const UserContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      {/* Sending token and setToken to child pages using createContext */}
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
              //setToken={setToken} token={token}    // prop based token and setToken is sending
              />
            }
          />
          <Route
            path="/products"
            element={
              <Protected >
                <Products
                //setToken={setToken}
                />
              </Protected>
            }
          />
          <Route
            path="/product-description/:id"
            element={
              <Protected
              //token={token}
              >
                <ProductDetail />
              </Protected>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
