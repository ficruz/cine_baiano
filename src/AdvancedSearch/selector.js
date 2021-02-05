import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Selector(props) {
  return (
    <FormControl variant="outlined">
      <InputLabel id={props.InitialData.label}>
        {props.InitialData.label}
      </InputLabel>
      <Select
        labelId={props.InitialData.label}
        id={`select-${props.InitialData.label}`}
        label={props.InitialData.label}
        onChange={(e) => props.clicked(e.target.value)}
        value={props.currentValue}
      >
        {props.InitialData.values.map((el) => (
          <MenuItem
            key={el[Object.keys(props.InitialData.values[0])[0]]}
            value={el[Object.keys(props.InitialData.values[0])[0]]}
          >
            {el[Object.keys(props.InitialData.values[0])[0]]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
