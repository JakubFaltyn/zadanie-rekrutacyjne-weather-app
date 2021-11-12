import { useState, useEffect} from "react";


const Select = ({setCity, city}, {
    options = [
        {
            value: "London",
            label: "London",
        },
        {
             value: "München",
             label: "München",
        },
    ]
  }) => {

    return (
      <select
        value={city}
        onChange={e => setCity(e.target.value)}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  };

  export default Select;