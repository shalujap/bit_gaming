import { Search, UnfoldMore } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import BNB from "../../../Assets/Images/BNB.png"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import OrderBook from './OrderBook'

const RightTable = (props:any) => {
    return (
        <>
            <div className="main_market_right">
                <div className="data_sec">
                    <div className=" data_sec_new" style={{ display: props.CointTab }}>
                        <div className="main_search">
                            <div className="searchbar">
                                <Search />
                                <input type='text' className='search_input' />
                            </div>

                        </div>

                        <div className="main_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="pr">pair
                                            <UnfoldMore />
                                        </th>

                                        <th className="pc">Price
                                            <UnfoldMore />
                                        </th>

                                        <th className="ch">Balance</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <div className="table_body">
                                        <tr className='d-value only-open-orders'></tr>
                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                        <tr>
                                            <Link to="/">
                                                <td>
                                                    <img src={BNB} alt='BNB' className='coin' />
                                                    <span>BNB/USDT</span>
                                                    <span className='clr'>-2.14%</span>
                                                </td>

                                                <td className='pc'>
                                                    234.00000 USDT
                                                </td>

                                                <td className='ch'>
                                                    <h6>$0.00</h6>
                                                    <h6>BNB 0.00</h6>

                                                </td>
                                            </Link>
                                        </tr>

                                    </div>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div className="d_mobail_none main_table2" style={{ display: props.myorderTab }}>
                        <div className="inner">
                            <div className="tabs_main">
                                <Tabs>
                                    <TabList>
                                        <Tab>Market Trades</Tab>
                                        <Tab className=" react-tabs__tab trade_tab_none">Stop Limit</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="tab1">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className='pr'>Price(USDT)</th>
                                                        <th className='pc'>Amount</th>
                                                        <th className='ch'>Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>

                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>


                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>


                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>


                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>


                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>


                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>

                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>

                                                    <tr>
                                                        <td className='green'>233.700</td>
                                                        <td className='pc'>0.024</td>
                                                        <td className='ch'>6:03:37 PM</td>

                                                    </tr>

                                                    
                                                </tbody>
                                            </table>

                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <OrderBook />
                                    </TabPanel>
                                </Tabs>

                            </div>
                        </div>
                    </div>

                </div> 

            </div>
        </>
    )
}

export default RightTable