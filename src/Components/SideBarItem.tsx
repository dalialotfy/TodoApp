import React, { useContext, MouseEvent } from "react";
import { ContextVal } from "../Store/Store";

interface SubData {
  id: string;
  title: any;   ////////
}

const SideBarItem: React.FC<{ subData: SubData }> = ({ subData }) => {
  const { clickHandler } = useContext(ContextVal);

  const handleItemClick = (e:any) => {
    clickHandler(e);
  };

  return (
    <ul
      key={subData.id}
      onClick={handleItemClick}
      className="text-white cursor-pointer"
    >
      {subData.title}
    </ul>
  );
};

export default SideBarItem;
