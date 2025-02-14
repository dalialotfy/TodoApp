import React,{ useContext } from "react"
import { ContextVal } from "../Store/Store"

const SelectedProject:React.FC=()=>
{

    let {FilteredData,deleteSelectedProject}= useContext(ContextVal)

    return(
        <div className="flex items-center flex-col gap-5 w-3/4 justify-center">

<div className="flex items-start p-20 flex-col gap-5 w-3/4 ">
            <h1 className="text-3xl font-bold">{FilteredData?.title}</h1>
            <pre className="text-slate-400">{FilteredData?.date}</pre>
            <pre>{FilteredData?.desc}</pre>

            <button
                className="rounded-lg bg-red-400 p-2"
                onClick={deleteSelectedProject}
            >
                Delete Project
            </button>
            <br /> </div>
    
    </div>)
}

export default SelectedProject