import React from "react";
import TextField from "@material-ui/core/TextField";

const nomeDoFilme = (props) => {
  return (
    <div>
      <TextField
        id={`${props.name}`}
        label={props.label}
        type="search"
        variant="outlined"
        onChange={(e) => {
          props.clicked(e.target.value);
        }}
      />
    </div>
  );
};

export default nomeDoFilme;
