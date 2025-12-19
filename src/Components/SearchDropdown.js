import React from "react";
import Select from "react-select";

const SearchDropdown = ({ value, onChange }) => {
  const options = [
    { value: "ZPH School", label: "ZPH School" },
    { value: "Govt School", label: "Govt School" },
    { value: "little School", label: "little School" },
    { value: "Private School", label: "Private School" },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder="Select Vehicle"
      isSearchable
    />
  );
};

export default SearchDropdown;
