import React, { useState } from "react";
import DeleteBox from "./DeleteBox";

export default function Details(props){

    const [startDelete, setStartDelete] = useState(false);
    function cancelDeleteBox(){
        setStartDelete(false);
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <button onClick={() => setStartDelete(true)}>Delete</button>
            <button onClick={props.onEdit}>Edit</button>
            {startDelete && <DeleteBox id={props.id} onCancel={cancelDeleteBox} onDelete={props.onDelete}/>}
        </div>
    );
}