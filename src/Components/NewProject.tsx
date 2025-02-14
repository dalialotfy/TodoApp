import React,{ useContext } from "react"
import { ContextVal } from "../Store/Store"

const NewProject: React.FC = () => {
    let {addProject} = useContext(ContextVal)
    return (
        <div className="flex items-center flex-col gap-5 w-3/4 justify-center">
        <img src="" alt="" />
        <h1 className="font-bold text-slate-500 ">No project Selected</h1>
        <p className="text-slate-300 text-center">Select a project or get started with a new one</p>
        <button className="font-bold text-white bg-slate-400  md:p-3 rounded-md " onClick={()=>addProject()}>Create New Project </button>
        </div>
    )
}

export default NewProject