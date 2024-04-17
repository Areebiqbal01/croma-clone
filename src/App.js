import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import SliderAuto from "./components/SliderAuto";
import { createContext, useState } from "react";

export const StateContext = createContext();


function App() {
  const [globalState, setGlobalState] = useState({
    menu: [],
    searchText: "",
    brandField: null,
    subCategoryField: null,
  });
  return (
    <>
      <StateContext.Provider value={{ globalState, setGlobalState }}>
        <Header />
        <main className="bg-[#191919]">
          <Outlet />
          <SliderAuto />
        </main>
      </StateContext.Provider>
    </>
  );
}

export default App;
