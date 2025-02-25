import { useEffect, useState } from "react";

type Option = {
  id: number;
  label: string;
};

type CustomMultiSelectProps = {
  name: string;
  label?: string;
  options: Option[]; // Ensure proper type for options
  onSelectionChange?: (selectedIds: number[], name?: string) => void;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: any[];
  errors:any
};

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  name,
  label,
  options,
  onSelectionChange,
  onSearchChange,
  selected = [],
  errors
}) => {  
  const [search, setSearch] = useState<string>("");

  const handleSelect = (option: Option) => {
    if (!selected.includes(option.id)) {
      const newSelection = [...selected, option.id];

      onSelectionChange?.(newSelection, name);
    }
  };

  const handleRemove = (id: number) => {
    const newSelection = selected.filter((selectedId) => selectedId !== id);

    onSelectionChange?.(newSelection, name);
  };

  return (
    <>
      <label className="text-lg font-bold">{label}</label>

      {errors[name] && <p className="text-red-500 text-left mt-1">{errors[name]}</p>}
      <div className="w-full p-4 border rounded-lg shadow-md">
        <input
          name={name}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearchChange?.(e);
          }}
          className="w-full p-2 border rounded"
        />
        <div className="border p-2 mt-2 rounded h-32 overflow-auto">
          {options.map((option) => (
            <div
              key={option.id}
              className="p-1 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Selected Items:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected.map((id) => {
              const selectedItem = options.find((option) => option.id === id);
              return (
                selectedItem && (
                  <div
                    key={id}
                    className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-2"
                  >
                    {selectedItem.label}
                    <button
                      onClick={() => handleRemove(id)}
                      className="text-white font-bold"
                    >
                      ×
                    </button>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomMultiSelect;
