import React from 'react'
import TopLivechart from './TopLivechart'
import OrderBook from './OrderBook'
import MainLiveChart from './MainLiveChart'
import BottomTable from './BottomTable'
import MainLivechart2 from './MainLivechart2'

const MainTrading = () => {

    return (
        <>
            <div className="main_trading_page">
                <div className="inner_pages">
                    <div className="left_area">
                        <div className=" top_live_chart" >
                            <TopLivechart />
                        </div>

                        <div className="left_inner">
                            <div className=" order_book_sec">
                                <OrderBook />
                            </div>

                            <div className="main_chart_sec" >
                                <div className="main_livecharttop">
                                    <MainLiveChart />
                                </div>

                                <div className="main_livechart2">
                                    <MainLivechart2 />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="bottom_table_market">
                    <BottomTable />
                </div>

            </div>
        </>
    )
}

export default MainTrading