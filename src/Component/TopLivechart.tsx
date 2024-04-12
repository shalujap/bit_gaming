import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../Config/Config'

const TopLivechart = () => {
    return (
        <div className="top_live_chart">
            <div className="main_livechart">
                <div className="left_sec">
                    <Link to="/">
                        <img src={logo} alt='logo'/>
                    </Link>
                </div>
                <div className="inner">
                    <div className="busd">
                        <h2>3000.00<span>USD</span></h2>
                    </div>

                    <div className="n1">
                        <Menu />
                    </div>



                </div>

            </div>
        </div>
    )
}

export default TopLivechart