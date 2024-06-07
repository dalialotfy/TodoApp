import React, { useRef } from "react";
import { useState } from "react";
import Inputs from "./Components/Inputs";
import NewProject from "./Components/NewProject";
import SideBar from "./Components/SideBar";
import { v4 as uuid } from "uuid";
import SelectedProject from "./Components/SelectedProject";
import ContextMangerProvider, { ContextVal } from "./Store/Store";
import { useContext } from "react";
type dataType = {
    title: string,
    desc: string,
    date: string,
    id: string,
  };
  
function App() {
    let title = useRef<HTMLInputElement>(null);
    let desc = useRef<HTMLTextAreaElement>(null);
    let date = useRef<HTMLInputElement>(null);

    let [data, setData] =  useState<dataType[]>(
        JSON.parse(localStorage.getItem("arr") || '[]')
      );
    let i = uuid();
    let { FilteredData, addproj } = useContext(ContextVal);

    console.log(FilteredData);
    localStorage.setItem("arr", JSON.stringify(data));

    console.log("FilteredData", FilteredData);
    return (
        <main className="flex w-full">
            <SideBar />
            {FilteredData?.title ? (
                <SelectedProject />
            ) : addproj ? (
                <Inputs />
            ) : (
                <NewProject />
            )}
        </main>
    );
}
export default App;
