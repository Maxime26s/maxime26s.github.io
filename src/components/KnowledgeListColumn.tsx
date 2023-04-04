import React, { useState } from "react";
import ListItem from "./ListItem";
import Knowledge from "./Knowledge";
import { Transition } from "@headlessui/react";

type KnowledgeListColumnProps = {
  title: string;
  data: Knowledge[];
  numColumns: number;
};

function KnowledgeListColumn({
  title,
  data,
  numColumns,
}: KnowledgeListColumnProps) {
  const columnSize = Math.ceil(data.length / numColumns);
  const [visible, setVisible] = useState(true);

  const renderColumns = () => {
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      const start = i * columnSize;
      const end = start + columnSize;
      const columnData = data.slice(start, end);
      columns.push(
        <ul key={i} className={`w-1/${numColumns} pr-4 list-none`}>
          {columnData.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </ul>
      );
    }
    return columns;
  };

  const handleTitleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div
        className="flex items-start cursor-pointer"
        onClick={handleTitleClick}
      >
        {visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 pt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 pt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      </div>
      <Transition
        show={visible}
        enter="transition-opacity duration-750"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-750"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex">{renderColumns()}</div>
      </Transition>
    </>
  );
}

export default KnowledgeListColumn;
