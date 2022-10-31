import { Avatar } from "@material-ui/core"
import React from "react"
import './Story.css'

function Story({ name, src, profile }) {
    return (
        <>
            <div style={{ backgroundImage: `url(${src})` }}
                className="story">
                <Avatar className="story_avatar" src={profile} />
                <h4>{name}</h4>

            </div>

        </>
    )
}

export default Story