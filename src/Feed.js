import React from "react"
import './Feed.css'
import MessageStory from "./MessageStore"
import StoryReel from "./StoryReel"

function Feed() {
    return (

        <>
            <div className="feed">
                <StoryReel />
                <MessageStory />
            </div>

        </>
    )
}
export default Feed