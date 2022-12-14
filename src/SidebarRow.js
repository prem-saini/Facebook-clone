import { Avatar, Icon } from "@material-ui/core"
import React from "react"
import './Sidebar.css'


function SidebarRow({ src, Icon, title }) {
    return (
        <>
            <div className="SidebarRow">
                {src && <Avatar src={src} />}
                {Icon && <Icon />}

                <h4>{title}</h4>
            </div>
        </>
    )
}
export default SidebarRow