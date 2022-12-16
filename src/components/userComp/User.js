import React from "react";

const User = (props) => {
    return (
        <div key={props.id} style={style.mainCont}>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </div>
    );
};

export default User;

const style = {};
