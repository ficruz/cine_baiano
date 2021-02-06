import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText(props) {
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            (() => {
              props.setListaFiltrada(null);
              return props.getQuery(props.searchObj);
            })();
          }
        }}
      />
    </div>
  );
}
