import React from "react";
import DeleteIcon from "../../../img/delete.png";
import { CardDelete } from "./index.styles";

function DeleteItem() {
    return (
        <CardDelete>
            <img src={DeleteIcon} alt="" />
        </CardDelete>
    );
}

export default DeleteItem;

