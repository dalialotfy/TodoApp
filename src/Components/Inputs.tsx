import React, { useContext, useRef, useState } from "react";
import { ContextVal } from "../Store/Store";

interface DataType {
    current: {
        value: string;
    };
}

const Inputs: React.FC=()=> {
    const { cancelProject, title, desc, date, handleChange } = useContext(ContextVal);

    const [valid, setValid] = useState(true);
    const [validName, setValidName] = useState<string>('');

    function Validation() {
        if (!title.current?.value || !desc.current?.value || !date.current?.value) {
            setValid(false);
            let newName = '';
            if (!title.current?.value) {
                newName += 'Title';
            }
            if (!date.current?.value) {
                newName += newName ? ' and ' : '';
                newName += 'Date';
            }
            if (!desc.current?.value) {
                newName += newName ? ' and ' : '';
                newName += 'Desc';
            }
            setValidName(newName);
        } else {
            cancelProject();
            handleChange();
        }
    }

    return (
        <div className="flex gap-3 w-3/4 justify-center bg-slate-300">
            <div className="flex items-left flex-col gap-3 w-3/4 justify-center ">
                {!valid && <div className="bg-red-400">{validName} shouldn't be empty</div>}
                <label htmlFor="" className="font-bold">Title</label>
                <input className="rounded-md" type="text" ref={title as React.RefObject<HTMLInputElement>} />
                <label htmlFor="" className="font-bold">Description</label>
                <textarea className="rounded-md" ref={desc as React.RefObject<HTMLTextAreaElement>} />
                <label htmlFor="" className="font-bold">Date</label>
                <input className="rounded-md" type="date" ref={date as React.RefObject<HTMLInputElement>} />
                <div>
                    <button className="mr-4 mt-4 font-bold text-white bg-slate-400 md:p-2 rounded-md" onClick={() => Validation()}>Save</button>
                    <button className="font-bold text-white bg-slate-400 md:p-2 rounded-md" onClick={() => cancelProject()}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
export default Inputs;