import React from "react";
import { FaCog, FaUserEdit } from "react-icons/fa";

const Icons = (props) => {
    return (
        <section style={style.Cont}>
            <div style={style.iconCont}>
                <a style={style.link} href='www.localhost:3000/main'>
                    <FaCog />
                </a>
                <a style={style.link} href='www'>
                    <FaUserEdit />
                </a>
            </div>
        </section>
    );
};

export default Icons;

const style = {
    Cont: {},

    iconCont: {},

    link: {},
};
