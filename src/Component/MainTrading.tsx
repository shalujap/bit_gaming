import React, { useState } from 'react'
import TopLivechart from './TopLivechart'
import OrderBook from './OrderBook'
import MainLiveChart from './MainLiveChart'
import RightTable from './RightTable'
import { AutoGraph, CurrencyExchange, FormatListBulleted, ListAlt, History } from '@mui/icons-material'
import BottomTable from './BottomTable'
import MainLivechart2 from './MainLivechart2'

const MainTrading = () => {



    // responsive state work 
    let [marketTab, setMarketTab] = useState('');
    let [CointTab, setCoinTab] = useState('');
    let [orderTab, setOrderTab] = useState('');
    let [BuySellTab, setsetBuySellTab] = useState('');

    let [LoadApi, setLoadApi] = useState(0);


    let tradingTab = (tab: string) => {
        if (window.screen.width! <= 768) {
            // window.location.reload();
            tab === 'live-chart' ? setMarketTab('block') : setMarketTab('none');
            tab === 'coin-chart' ? setCoinTab('block') : setCoinTab('none');
            tab === 'all-orders' ? setOrderTab('block') : setOrderTab('none');
            tab === 'main-buy_sell' ? setsetBuySellTab('block') : setsetBuySellTab('none');
        }
    }


    return (
        <>

            {/* Responsive Data Icon  */}
            <div className='trading_responsive_tab'>
                <div className="nav Footer___tab">
                    <div className='react-tab__1' onClick={() => tradingTab('coin-chart')} >
                        <a className="btn">
                            <FormatListBulleted />
                            <span> Markets</span>
                        </a>
                    </div>

                    <div className='react-tab__1' onClick={() => tradingTab('live-chart')} >
                        <a className="btn">
                            <AutoGraph />
                            <span> Charts</span>
                        </a>
                    </div>

                    <div className='react-tab__1' onClick={() => tradingTab('main-buy_sell')} >
                        <a className="btn logo__Main">
                            <CurrencyExchange />
                            <span> Buy/Sell</span>
                        </a>
                    </div>

                    <div className='react-tab__1' onClick={() => tradingTab('all-orders')} >
                        <a className="btn logo__Main">
                            <ListAlt />
                            <span> My Orders</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="main_trading_page">
                <div className="inner_pages">
                    <div className="left_area">
                        {/* top live chart */}
                        <div className=" top_live_chart" >
                            <TopLivechart />
                        </div>

                        <div className="left_inner">
                            {/* left orderbook table */}
                            <div className=" order_book_sec" style={{ display: CointTab }}>
                                <OrderBook />
                            </div>

                            <div className="main_chart_sec" >
                                {/* centre top live chart */}
                                <div className="main_livecharttop d_mobail_none" style={{ display: marketTab }} >
                                    <MainLiveChart />
                                </div>

                                {/* centre bottom live chart */}
                                <div className="main_livechart2 d_mobail_none"  style={{ display: BuySellTab }}>
                                    <MainLivechart2 />
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* right table market */}
                    {/* <div className=" right_area">
                        <div className="right_table_section">
                            <RightTable CointTab={CointTab} myorderTab={myorderTab} />
                        </div>

                    </div> */}
                </div>

                {/* bottom table in tabs */}
                <div className="d_mobail_none bottom_table_market" style={{ display: orderTab }} >
                    <BottomTable />
                </div>

            </div>
        </>
    )
}

export default MainTrading