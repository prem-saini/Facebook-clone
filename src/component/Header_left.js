import React from "react"
import SearchIcon from '../../node_modules/@material-ui/icons/Search';
import HomeIcon from '../../node_modules/@material-ui/icons/Home'
import FlagIcon from '../../node_modules/@material-ui/icons/Flag'
import { StorefrontOutlined, Subscriptions, SupervisedUserCircle } from "@material-ui/icons"
import { Avatar, IconButton } from "@material-ui/core"
import { AddIcCall, ExpandMoreOutlined, ForumOutlined, NotificationsActiveOutlined } from "@material-ui/icons"

function Header() {
    return (
        <>

            <div className="Header">
                <div className="Header_left">
                    {/* <Facebook /> */}
                    <h1 className="div_name">FACEBOOK</h1>

                </div>
                <div className="input">
                    <SearchIcon />
                    <input placeholder="Search Your Facebook" type="text" />

                </div>

                <div className="Header_mid">
                    <div className="middle">
                        <HomeIcon font-size="large" />
                    </div>
                    <div className="middle">
                        <FlagIcon font-size="large" />
                    </div>
                    <div className="middle">
                        <Subscriptions font-size="large" />
                    </div>
                    <div className="middle">
                        <StorefrontOutlined font-size="large" />
                    </div>
                    <div className="middle">
                        <SupervisedUserCircle font-size="large" />




                    </div>
                </div>
                <div className="Header_right">
                    <div className="Header_info">
                        <Avatar />
                    </div>
                    <IconButton>
                        <AddIcCall />
                    </IconButton>
                    <IconButton>
                        <ForumOutlined />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveOutlined />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreOutlined />
                    </IconButton>

                </div>





            </div>




        </>

    )
}

export default Header