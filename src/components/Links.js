import React from "react";
import user from "../data/user";

function Links(props) {
    console.log("Links.js props:", props)
    return (
        <div>
        <h3>Links</h3>
        <a href={user.links.github} github={user.links.github}>{user.links.github}</a>           
        <a href={user.links.linkedin} linkedin={user.links.linkedin}>{user.links.linkedin}</a>
        </div>


  
    );
}

export default Links