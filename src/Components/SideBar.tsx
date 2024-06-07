import React, { useContext } from "react";
import { ContextVal } from "../Store/Store";
import SideBarItem from "./SideBarItem";


const  SideBar:React.FC=()=> {
   let {addProject,data}=useContext(ContextVal)
    return (
        <aside className="bg-gray-700 flex w-1/3 items-center flex-col gap-5 h-screen rounded-tr-lg  ">
            <h1 className="text-white mt-3">Your Projects </h1>
            <button className="text-white bg-slate-400  md:p-3 rounded-md " onClick={addProject}> + ADD Project</button>
            {data ? data.map((li) =>
                <SideBarItem   subData={li} key={li.id} />) : ''}
        </aside>
    )
}

export default SideBar