import React from "react";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";

export default function MoreButton(props) {
  return (
    <div>
      <IconButton
        disableRipple={true}
        aria-label={"expand row"}
        size={"small"}
        onClick={() => {
          return props.setOpen(!props.open);
        }}
      >
        {props.open ? (
          <RemoveCircleOutlineIcon color="secondary" />
        ) : (
          <AddCircleOutlineIcon color="secondary" />
        )}
        {props.open ? (
          <p>
            &nbsp;<b>{props.onClose}</b>
          </p>
        ) : (
          <p>
            &nbsp;<b>{props.onOpen}</b>
          </p>
        )}
      </IconButton>
    </div>
  );
}
