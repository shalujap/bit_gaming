import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { History } from '@mui/icons-material'
import gameimg from "../Assets/Images/gameimg.png"
import day_img from "../Assets/Images/day_img.png";
import icon_check from "../Assets/Images/icon_check.svg";
import message from "../Assets/Images/message.svg"
import { Link } from 'react-router-dom'
const OrderBook = () => {
    return (
        <>
            <div className="main_order_Sec">
                <div className="main_table_data">
                    <div className="main_table_order">

                        <div className="main_table2">
                            <div className="tabs_card_dcs">
                                <div className="tabs_main">
                                    <Tabs>
                                        <div className="mian_tablist">
                                            <TabList>
                                                <Tab>All Bets</Tab>
                                                <Tab>My Bets</Tab>
                                                <Tab>Top</Tab>

                                            </TabList>
                                        </div>

                                        <TabPanel>
                                            <div className="total_area">
                                                <div className="all_bets">
                                                    <h6>ALL BETS</h6>
                                                    <p>380</p>
                                                </div>

                                                <a className="right_bet">
                                                    <History />
                                                    <p>Previous Hand</p>
                                                </a>
                                            </div>

                                            <div className="line_span"></div>

                                            <div className="tab1">
                                                <div className="data_table">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Bet USD</th>
                                                                <th className='text-end'>Cash out USD</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr >
                                                                <td>
                                                                    <div className="table_flex">
                                                                        <img src={gameimg} alt='gameimg' />
                                                                        <span>d***5</span>
                                                                    </div>
                                                                </td>
                                                                <td>100.00</td>
                                                                <td className='text-end'>142.00</td>
                                                            </tr>
                                                            <div className="hr"></div>

                                                            <tr >
                                                                <td>
                                                                    <div className="table_flex">
                                                                        <img src={gameimg} alt='gameimg' />
                                                                        <span>d***5</span>
                                                                    </div>
                                                                </td>
                                                                <td>100.00</td>
                                                                <td className='text-end'>142.00</td>
                                                            </tr>
                                                            <div className="hr"></div>


                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </TabPanel>

                                        <TabPanel>

                                            <div className="line_span"></div>

                                            <div className="tab1">
                                                <div className="data_table">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>Bet USD</th>
                                                                <th className='text-end'>Cash out USD</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr >
                                                                <td>10-4-2023</td>
                                                                <td>100.00</td>
                                                                <td className='text-end'>142.00</td>
                                                            </tr>
                                                            <div className="hr"></div>

                                                            <tr >
                                                                <td>10-4-2023</td>
                                                                <td>100.00</td>
                                                                <td className='text-end'>142.00</td>
                                                            </tr>
                                                            <div className="hr"></div>


                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <Tabs>
                                                <div className="nested_tablist">
                                                    <TabList>
                                                        <Tab>HUGE WINS</Tab>
                                                        <Tab>BIGGEST WINS</Tab>
                                                        <Tab>MULTIPLIERS</Tab>
                                                    </TabList>
                                                </div>
                                                <TabPanel>
                                                    <Tabs>
                                                        <div className="inner_nested_tablist mt-3">
                                                            <TabList>
                                                                <Tab>Day</Tab>
                                                                <Tab>Month</Tab>
                                                                <Tab>Year</Tab>
                                                            </TabList>
                                                        </div>

                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                 <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </TabPanel>

                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </TabPanel>

                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p> Cashed out:  <span className='pink'>1.52</span></p>
                                                                            <p>Win USD: <span>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </TabPanel>

                                                <TabPanel>
                                                    <Tabs>
                                                        <div className="inner_nested_tablist mt-3">
                                                            <TabList>
                                                                <Tab>Day</Tab>
                                                                <Tab>Month</Tab>
                                                                <Tab>Year</Tab>
                                                            </TabList>
                                                        </div>
                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </TabPanel>

                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </TabPanel>

                                                        <TabPanel>
                                                            <div className="all_detail">
                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                                <div className="top_daydata">

                                                                    <div className="top_data">
                                                                        <div className="left_data">
                                                                            <img src={day_img} alt='day_img' />
                                                                            <div className="user_name">d***2</div>
                                                                        </div>

                                                                        <div className="centre_data">
                                                                            <p>Bet USD: <span>1.52</span></p>
                                                                            <p>Win USD: <span className='border_radius'> 10843.62 </span></p>
                                                                            <p>Multiplier:  <span className='pink'>1.52</span></p>
                                                                        </div>

                                                                        <div className="right_data">
                                                                            <img src={icon_check} alt='icon_check' />
                                                                        </div>

                                                                    </div>

                                                                    <div className="bottom_data">
                                                                        <div className="date_filed">10 Apr</div>
                                                                        <div className="round">Round: <span> 3869.14x</span></div>
                                                                        <Link to="/" className="mesg_box">
                                                                            <img src={message} alt='message' />
                                                                        </Link>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </TabPanel>

                                                <TabPanel>
                                                    <Tabs>
                                                        <div className="inner_nested_tablist mt-3">
                                                            <TabList>
                                                                <Tab>Day</Tab>
                                                                <Tab>Month</Tab>
                                                                <Tab>Year</Tab>
                                                            </TabList>
                                                        </div>
                                                        <TabPanel>
                                                            <div className="tab1 inner_tab_panel">
                                                                <div className="data_table">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>X</th>
                                                                                <th className='text-end'>Fairness</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>



                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </div>
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <div className="tab1 inner_tab_panel">
                                                                <div className="data_table">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>X</th>
                                                                                <th className='text-end'>Fairness</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>



                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </div>
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <div className="tab1 inner_tab_panel">
                                                                <div className="data_table">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>X</th>
                                                                                <th className='text-end'>Fairness</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>

                                                                            <tr >
                                                                                <td>14 apr 08:13:52</td>
                                                                                <td>100x</td>
                                                                                <td className='text-end'>
                                                                                    <img className='icon_style' src={icon_check} alt='icon_check' />
                                                                                </td>
                                                                            </tr>
                                                                            <div className="hr"></div>



                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </TabPanel>
                                            </Tabs>


                                        </TabPanel>


                                    </Tabs>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderBook