import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const Dropdown = ({ data }) => {
  const [options] = useState(data);

  return (
    <div>
      <h3>Select genre</h3>
      <Multiselect options={options} displayValue="name" />
    </div>
  );
};

export default Dropdown;
