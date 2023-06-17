import React, { useState } from "react";
import Details from "./Details";
import EditModeBox from "./EditModeBox";

function Card(props){

    const [editMode, setEditMode] = useState(false);
    const renderEditBox = () => setEditMode(!editMode);

    return (
        <div className="contact">
            {editMode ? 
                <EditModeBox id={props.id} onDiscard={renderEditBox} contact={{name:props.name,phone:props.phone,email:props.email}}/> :
                <Details id={props.id} name={props.name} phone={props.phone} email={props.email} onDelete={props.onDeleted} onEdit={renderEditBox}/>
            }
        </div>
    )
}

export default Card;