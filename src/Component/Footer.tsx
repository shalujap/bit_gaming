import { Link, useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import partner1 from "../Assets/Images/partner1.png";
import partner2 from "../Assets/Images/partner2.png";
import partner3 from "../Assets/Images/partner3.png";
import partner4 from "../Assets/Images/partner4.png";
import payment1 from "../Assets/Images/payment1.svg";
import payment2 from "../Assets/Images/payment2.svg";
import payment3 from "../Assets/Images/payment3.svg";
import payment4 from "../Assets/Images/payment4.svg";
import payment5 from "../Assets/Images/payment5.svg";
import payment6 from "../Assets/Images/payment6.svg";
import payment7 from "../Assets/Images/payment7.svg";
import payment8 from "../Assets/Images/payment8.svg";
import payment9 from "../Assets/Images/payment9.svg";
import payment10 from "../Assets/Images/payment10.svg";
import payment11 from "../Assets/Images/payment11.svg";
import payment12 from "../Assets/Images/payment12.svg";
import payment13 from "../Assets/Images/payment13.svg";
import payment14 from "../Assets/Images/payment14.svg";
import Facebook from "../Assets/Images/Facebook.svg";
import telegram from "../Assets/Images/telegram.svg";
import Instagram from "../Assets/Images/Instagram.svg";
import Youtube from "../Assets/Images/Youtube.svg";
import licsense1 from "../Assets/Images/licsense1.svg";
import licsense2 from "../Assets/Images/licsense2.svg";
import licsense3 from "../Assets/Images/licsense3.svg";

const Footer = () => {
    let location = useLocation();

    return (
        <>
            <div className="footer">
                <nav className="footer_nav">
                    <ul className="footer_navlist">
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Help
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Games Rules
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Deposit
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Withdrawal
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Support
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Parimatch
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Terms and Conditions
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Public Offers
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        AML/KYC Policy
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        For partners
                                    </Link>
                                </li>

                            </ul>
                        </li>



                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Info
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Responsible gambling
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Self-exclusion
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Dispute resolution
                                    </Link>
                                </li>

                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">
                                        Privacy & Management of Personal Data
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>

                <div className="partner_sec">
                    <div className="inner_data">
                        <h5>Trusted Sponsors & Partners Of</h5>

                        <div className="partner_img">
                            <div className="img_item">
                                <img src={partner1} alt="partner" />
                            </div>

                            <div className="img_item">
                                <img src={partner2} alt="partner" />
                            </div>

                            <div className="img_item">
                                <img src={partner3} alt="partner" />
                            </div>

                            <div className="img_item">
                                <img src={partner4} alt="partner" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="payment_sec">
                    <div className="inner_methods">
                        <h5>Available payment methods</h5>

                        <div className="payment_method">
                            <div className="method">
                                <img src={payment1} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment2} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment3} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment4} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment5} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment6} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment7} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment8} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment9} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment10} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment11} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment12} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment13} alt="partner" />
                            </div>

                            <div className="method">
                                <img src={payment14} alt="partner" />
                            </div>




                        </div>
                    </div>
                </div>

                <div className="bottom_sec">
                    <div className="social_media">
                        <h5>Social networks</h5>

                        <div className="media_icons">
                            <Link to="/">
                                <img src={Facebook} alt="Facebook" />
                            </Link>

                            <Link to="/">
                                <img src={telegram} alt="telegram" />
                            </Link>

                            <Link to="/">
                                <img src={Instagram} alt="Instagram" />
                            </Link>

                            <Link to="/">
                                <img src={Youtube} alt="Youtube" />
                            </Link>
                        </div>

                    </div>
                    
                    <div className="licsence_Sec">
                        <h5>Licenses</h5>

                        <div className="licsens_img">
                            <Link to="/">
                                <img src={licsense1} alt="licsense" />
                            </Link>

                            <Link to="/">
                                <img src={licsense2} alt="licsense" />
                            </Link>

                            <Link to="/">
                                <img src={licsense3} alt="licsense" />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
export default Footer;
