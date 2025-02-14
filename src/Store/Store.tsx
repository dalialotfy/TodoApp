import React, { useRef, useState, createContext, ReactNode, FC, MouseEvent, useEffect } from "react";
import { v4 as uuid } from "uuid";

type dataType = {
  title: string,
  desc: string,
  date: string,
  id: string,
};

type CTXObj = {
  title: React.RefObject<HTMLInputElement>,
  desc: React.RefObject<HTMLTextAreaElement>,
  date: React.RefObject<HTMLInputElement>,
  data: dataType[],
  addproj: boolean,
  FilteredData?: dataType,
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void,
  handleChange: () => void,
  addProject: () => void,
  cancelProject: () => void,
  deleteSelectedProject: () => void,
};

export const ContextVal = createContext<CTXObj>({
  title: React.createRef(),
  desc: React.createRef(),
  date: React.createRef(),
  data: [],
  addproj: false,
  FilteredData: undefined,
  clickHandler: () => {},
  handleChange: () => {},
  addProject: () => {},
  cancelProject: () => {},
  deleteSelectedProject: () => {},
});

const ContextManagerProvider: FC<{ children: ReactNode }> = (props) => {
  const title = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLTextAreaElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<dataType[]>(
    JSON.parse(localStorage.getItem("arr") || '[]')
  );
  const [FilteredData, setFilteredData] = useState<dataType | undefined>();
  const [addproj, setAddproj] = useState(false);

  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(data));
  }, [data]);

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const innerHTML = event.currentTarget.innerHTML;
    const foundData = data.find((obj) => obj.title === innerHTML);
    setFilteredData(foundData);
    console.log("Filtered Data:", foundData);
  };

  const handleChange = () => {
    if (title.current && desc.current && date.current) {
      const newData = {
        title: title.current.value,
        desc: desc.current.value,
        date: date.current.value,
        id: uuid(),
      };

      setData((prevData) => {
        const updatedData = [...prevData, newData];
        return updatedData;
      });
    }
  };

  const addProject = () => {
    setAddproj(true);
    console.log("add", addproj);
  };

  const cancelProject = () => {
    setAddproj(false);
    console.log('cancel', addproj);
  };

  const deleteSelectedProject = () => {
    console.log(FilteredData);
    setData(data.filter((list) => FilteredData?.id !== list.id));
    setAddproj(false);
    setFilteredData(undefined);
    console.log(addproj);
  };

  const contextObject: CTXObj = {
    title,
    desc,
    date,
    data,
    addproj,
    FilteredData,
    clickHandler,
    handleChange,
    addProject,
    cancelProject,
    deleteSelectedProject
  };

  return (
    <ContextVal.Provider value={contextObject}>
      {props.children}
    </ContextVal.Provider>
  );
};

export default ContextManagerProvider;
