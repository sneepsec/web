import { useEffect, useRef, useState } from "react";

type Option = {
  id: number;
  name: string;
};

const SearchableDropdown = ({ options, label, id, }) => {
  console.log(options.length);
  const [selectedVal, handleChange] = useState<Option>({ id: 0, name: "" });
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal[label]) return selectedVal[label];

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="relative">
      <h1>Free talk</h1>
      <span>Choose your name and see your partner</span>
      <div className="border-2 rounded-md">
        <div className="selected-value">
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange({ id: 0, name: "" });
            }}
            className="w-full h-full p-2 outline-none"
            placeholder="You are..."
            onClick={toggle}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : "hidden"}`}></div>
      </div>

      <div className={`options ${isOpen ? "overflow-auto h-60 border-2 z-10 absolute w-full bg-white" : "hidden"}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`p-2 hover:bg-blue-200 ${option[label] === selectedVal ? "selected" : ""
                }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
      {selectedVal[label] && (
        <div className="flex flex-col w-full items-center">
          <h2>Your partner</h2>
          <h3 className="pb-8 text-cyan-600">{
            selectedVal.id % 2 == 0 && selectedVal.id == options.length - 1 ?
              selectedVal[label]
              : selectedVal.id % 2 == 0 ?
                options.find((v) => v.id == selectedVal.id + 1)[label]
                : options.find((v) => v.id == selectedVal.id - 1)[label]
          }</h3>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
