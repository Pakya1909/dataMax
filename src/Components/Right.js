import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Right = () => {
    return (
        <>
            <Tabs
                defaultActiveKey=""
                id="uncontrolled-tab-example"
                className="mb-4"
            >
                <Tab eventKey="profile" title="Profile">
                    Profile
                </Tab>
                <Tab eventKey="setting" title="Setting">
                    Setting
                </Tab>
                <Tab eventKey="debug" title="Debug">
                    Debug
                </Tab>
                <Tab eventKey="error" title="Error">
                    Error
                </Tab>
            </Tabs>
        </>
    )
}

export default Right