import React from 'react'
import tradegraph_img from "../Assets/Images/tradegraph_img.jpeg"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import TopLivechart from './TopLivechart'

const MainLiveChart = () => {
    return (
        <>
            <div className="main_chart_top">
                <div className="main_chart_center">
                    <img src={tradegraph_img} alt='tradegraph_img' />

                </div>
            </div>

        </>
    )
}

export default MainLiveChart