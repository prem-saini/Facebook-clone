import { ChatOutlined, EmojiFlags, ExpandMoreOutlined, LocalHospitalOutlined, PeopleAltOutlined, StorefrontOutlined, VideoLibraryOutlined } from "@material-ui/icons";

import React from "react"
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import './SidebarRow.css'




function Sidebar() {
    return (
        <>
            <div className="Sidebar">
                <SidebarRow src="https://yt3.ggpht.com/yti/AJo0G0nXZ4ONEumGCmihoG_NKgPBEM3mkhlDroLf5CBfUg=s88-c-k-c0x00ffffff-no-rj-mo" title="prem saini" />
                <SidebarRow Icon={LocalHospitalOutlined} title="Covid-19 Information Center" />
                <SidebarRow Icon={EmojiFlags} title="Pages" />
                <SidebarRow Icon={PeopleAltOutlined} title="Friends" />
                <SidebarRow Icon={ChatOutlined} title="Messenger" />
                <SidebarRow Icon={StorefrontOutlined} title="MarketPlace" />
                <SidebarRow Icon={VideoLibraryOutlined} title="videos" />
                <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />



            </div>
        </>

    )
}

export default Sidebar