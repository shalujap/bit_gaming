import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const MainLivechart2 = () => {

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <>
            <div className="main_buy_sell_tabs">
                <div className="main_buysell">
                    <div className="inner">
                        <Tabs>
                            <div className="mian_tablist">
                                <TabList>
                                    <Tab>Bet</Tab>
                                    <Tab>Auto</Tab>
                                </TabList>
                            </div>

                            <TabPanel>
                                <div className="calculation_Sec">
                                    <div className="left_sec">
                                        <div className='number_input'>
                                            <button className='left_btn' onClick={decrement}>-</button>
                                            <input type="text" value={value} readOnly />
                                            <button className='right_btn' onClick={increment}>+</button>
                                        </div>

                                        <div className="all_btns">
                                            <div className="btn_items">1</div>
                                            <div className="btn_items">2</div>
                                            <div className="btn_items">5</div>
                                            <div className="btn_items">10</div>
                                        </div>
                                    </div>

                                    <div className="right_Sec">
                                        <div className="data_box">
                                            <h6>BET</h6>
                                            <h6>10.00 USD</h6>
                                        </div>

                                    </div>
                                </div>

                            </TabPanel>

                            <TabPanel>
                                <div className="main_autoplay">
                                    <div className="calculation_Sec">
                                        <div className="left_sec">
                                            <div className='number_input'>
                                                <button className='left_btn' onClick={decrement}>-</button>
                                                <input type="text" value={value} readOnly />
                                                <button className='right_btn' onClick={increment}>+</button>
                                            </div>

                                            <div className="all_btns">
                                                <div className="btn_items">1</div>
                                                <div className="btn_items">2</div>
                                                <div className="btn_items">5</div>
                                                <div className="btn_items">10</div>
                                            </div>
                                        </div>

                                        <div className="right_Sec">
                                            <div className="data_box">
                                                <h6>BET</h6>
                                                <h6>10.00 USD</h6>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="autoplay_data">
                                        <div className="line_span"></div>

                                        <div className="auto_sec">
                                            <div className="autoplay_btn">Auto Play</div>

                                            <div className="right_toggle">
                                                <p>Auto Cah Out</p>
                                                <div className="toggle">

                                                </div>

                                                <div className="value">10.00</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </TabPanel>


                        </Tabs>
                    </div>

                    <div className="inner">
                        <Tabs>
                            <div className="mian_tablist">
                                <TabList>
                                    <Tab>Bet</Tab>
                                    <Tab>Auto</Tab>
                                </TabList>
                            </div>

                            <TabPanel>
                                <div className="calculation_Sec">
                                    <div className="left_sec">
                                        <div className='number_input'>
                                            <button className='left_btn' onClick={decrement}>-</button>
                                            <input type="text" value={value} readOnly />
                                            <button className='right_btn' onClick={increment}>+</button>
                                        </div>

                                        <div className="all_btns">
                                            <div className="btn_items">1</div>
                                            <div className="btn_items">2</div>
                                            <div className="btn_items">5</div>
                                            <div className="btn_items">10</div>
                                        </div>
                                    </div>

                                    <div className="right_Sec">
                                        <div className="data_box">
                                            <h6>BET</h6>
                                            <h6>10.00 USD</h6>
                                        </div>

                                    </div>
                                </div>

                            </TabPanel>

                            <TabPanel>
                                <div className="main_autoplay">
                                    <div className="calculation_Sec">
                                        <div className="left_sec">
                                            <div className='number_input'>
                                                <button className='left_btn' onClick={decrement}>-</button>
                                                <input type="text" value={value} readOnly />
                                                <button className='right_btn' onClick={increment}>+</button>
                                            </div>

                                            <div className="all_btns">
                                                <div className="btn_items">1</div>
                                                <div className="btn_items">2</div>
                                                <div className="btn_items">5</div>
                                                <div className="btn_items">10</div>
                                            </div>
                                        </div>

                                        <div className="right_Sec">
                                            <div className="data_box">
                                                <h6>BET</h6>
                                                <h6>10.00 USD</h6>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="autoplay_data">
                                        <div className="line_span"></div>

                                        <div className="auto_sec">
                                            <div className="autoplay_btn">Auto Play</div>

                                            <div className="right_toggle">
                                                <p>Auto Cah Out</p>
                                                <div className="toggle">

                                                </div>

                                                <div className="value">10.00</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </TabPanel>


                        </Tabs>
                    </div>


                </div>

            </div>
        </>
    )
}

export default MainLivechart2