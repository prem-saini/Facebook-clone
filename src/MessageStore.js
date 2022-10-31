import { Avatar } from "@material-ui/core"
import { InsertEmoticon, PhotoLibraryOutlined, VideocamOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react"
import './Message.css'

const getLocalItem = () => {
    let Post = localStorage.getItem("Post")
    if (Post) {
        return JSON.parse(Post)
    } else {
        return []
    }
}

function MessageStory() {

    const [text, setText] = useState()
    const [task, setTask] = useState(getLocalItem())
    const [edit, setEdit] = useState("")


    const changeHandler = () => {
        setTask([...task, text])
        localStorage.setItem("Post", JSON.stringify(text))
        setText("")
    }

    const getDelete = (item) => {
        const finalData = task.filter((curEl, index) => {
            return index !== item

        })
        setTask(finalData)
    }

    const getEdit = (text) => {
        console.log("Prem");
        let newEditItem = task.find((elem, index) => {
            return elem.index === text
        })
        setText(newEditItem.text);
        setEdit(text)

    }

    useEffect(() => {
        localStorage.setItem("Post", JSON.stringify(task))
    }, [task])
    return (
        <>
            <div className="MessageStory">
                <div className="MessageStory_top">
                    <Avatar />
                    <form>
                        <input className="MessageStory_input"

                            placeholder="Enter Your Post" value={text} onChange={(e) =>
                                setText(e.target.value)} />




                    </form>
                    <button onClick={changeHandler} className="div_map">Post</button>
                </div>

                <div className="MessageStory_bottom">
                    <div className="MessageStory_option">
                        <VideocamOutlined style={{ color: "red" }} />
                        <h4>Live Video</h4>
                    </div>
                    <div className="MessageStory_option">
                        <PhotoLibraryOutlined style={{ color: "Green" }} />
                        <h4>Photo/Video</h4>
                    </div>
                    <div className="MessageStory_option">
                        <InsertEmoticon style={{ color: "Blue" }} />
                        <h4>Feelings/Activity</h4>
                    </div>


                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        task.map((value, index) => {
                            return (
                                <>
                                    <div className="Common"  >{value}</div>
                                    {/* {localStorage.getItem("Post")} */}
                                    <div><button className="primary" onClick={() => getDelete(index)}>Delete</button></div>
                                    <div><button className="primary" onClick={() => getEdit((e) => setEdit(e.target.value))}>Edit {edit}</button></div>
                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}
export default MessageStory