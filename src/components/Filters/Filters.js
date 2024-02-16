import { faCaretDown, faClose, faCommentSlash, faCreditCard, faGripHorizontal, faHeartCircleCheck, faSearch, faRecycle, faBolt, faCartShopping, faHome, faMicrochip, faCommentDots, faIndustry, faScrewdriverWrench, faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Picker from 'react-mobile-picker'
import Btn from "./Btn";


const Strategy = {
    title: ['Big Option Buys.', 'Merger Arbitrage.', 'Short Reports.'],
}

const asset = {
    title: ['Stocks', 'Options', 'Futures', 'Forex', 'Crypto'],
}

const Filters = () => {
    const [pickerStrategy, setPickerStrategy] = useState({ title: 'Merger Arbitrage.' });

    const [pickerAsset, setPickerAsset] = useState({ title: 'Futures' });

    return (
        <>
            <div className="filter_container">
                <h1 className="title_Menu">Filters</h1>


                <div className="tags_container">
                    <div className="filters">
                        <h5 className="filters_title">Filters Applied</h5>
                        <span className="clear_filters">Clear All</span>
                    </div>
                    <div className="tags">
                        <div className="tag">
                            <div className="tag_name">Real Estate</div>
                            <FontAwesomeIcon icon={faClose} className="close_icon" color="#202020" />
                        </div>
                    </div>
                </div>

                <div className="stock">
                    <h5 className="stock_title">Stock</h5>
                    <div className="stock_container">
                        <input type="input" placeholder="$ tICKER" />
                        <FontAwesomeIcon icon={faSearch} className="search_icon" />
                    </div>

                    {/* Industry */}
                    <div className="industry_menu">
                        <FontAwesomeIcon icon={faCaretDown} className="arrow_icon" color="white" />
                        <h5 className="industry_title">Industry</h5>
                    </div>

                    {/* create list of industries open and close */}
                    <div className="industry_container">
                        <div className="col">
                            <div className="industry">
                                <FontAwesomeIcon icon={faHeartCircleCheck} className="arrow_icon"/>
                                Health care
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faRecycle} className="arrow_icon"/>
                                Materials
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faBolt} className="arrow_icon"/>
                                Energy
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faCreditCard} className="arrow_icon"/>
                                Consumer Directory
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faCartShopping} className="arrow_icon"/>
                                Consumer Staples
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faHome} className="arrow_icon"/>
                                Real Estate
                            </div>
                        </div>
                        <div className="col">
                            <div className="industry">
                                <FontAwesomeIcon icon={faMicrochip} className="arrow_icon" />
                                IT
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faCommentDots} className="arrow_icon"/>
                                Communication
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faIndustry} className="arrow_icon" />
                                Industrials
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="arrow_icon"/>
                                Utilities
                            </div>
                            <div className="industry">
                                <FontAwesomeIcon icon={faCircleDollarToSlot} className="arrow_icon"/>
                                Financials
                            </div>

                        </div>
                    </div>

                    {/* size and level */}
                    <div className="size_level_container">
                        <div className="col">
                            <div className="market_cap">
                                <div className="industry_menu">
                                    <FontAwesomeIcon icon={faCaretDown} className="arrow_icon" color="white" />
                                    <h5 className="market_title">Market Cap</h5>
                                </div>

                                <div className="size_container">
                                    <div className="size">
                                        <input type="radio" id="all" name="size" value="all" />
                                        <label for="all">Micro</label>
                                    </div>
                                    <div className="size">
                                        <input type="radio" id="small" name="size" value="small" />
                                        <label for="small">Small</label>
                                    </div>
                                    <div className="size">
                                        <input type="radio" id="mid" name="size" value="mid" />
                                        <label for="mid">Large</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="risk_level">
                                <div className="risk_menu">
                                    <FontAwesomeIcon icon={faCaretDown} className="arrow_icon" color="white" />
                                    <h5 className="risk_title">Risk Level</h5>
                                </div>

                                <div className="level_container">
                                    <div className="level">
                                        <input type="radio" id="all" name="level" value="all" />
                                        <label for="all">Low</label>
                                    </div>
                                    <div className="level">
                                        <input type="radio" id="small" name="level" value="small" />
                                        <label for="small">Mid</label>
                                    </div>
                                    <div className="level">
                                        <input type="radio" id="mid" name="level" value="mid" />
                                        <label for="mid">High</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  add picker */}
                    <div className="data_picker">
                        {/* strategy */}
                        <div calssName="col">
                            <div className="strategy">
                                <h5 className="strategy_title">Strategy</h5>
                                <Picker value={pickerStrategy} onChange={setPickerStrategy} height={110}>
                                    {Object.keys(Strategy).map(name => (
                                        <Picker.Column key={name} name={name}>
                                            {Strategy[name].map(option => (
                                                <Picker.Item key={option} value={option}
                                                    style={pickerStrategy[name] === option ? { backgroundColor: '#53ACFF', color: 'white', cursor: 'pointer' } : { color: '#7F7F7F', cursor: 'pointer' }}
                                                >
                                                    {option}
                                                </Picker.Item>
                                            ))}
                                        </Picker.Column>
                                    ))}
                                </Picker>
                            </div>

                        </div>
                        {/* asset */}
                        <div calssName="col">
                            <div className="asset">
                                <h5 className="asset_title">Asset Class</h5>
                                <Picker value={pickerAsset} onChange={setPickerAsset} height={110}>
                                    {Object.keys(asset).map(name => (
                                        <Picker.Column key={name} name={name}>
                                            {asset[name].map(option => (
                                                <Picker.Item key={option} value={option}
                                                    style={pickerAsset[name] === option ? { backgroundColor: '#53ACFF', color: 'white', cursor: 'pointer' } : { color: '#7F7F7F', cursor: 'pointer' }}
                                                >
                                                    {option}
                                                </Picker.Item>
                                            ))}
                                        </Picker.Column>
                                    ))}
                                </Picker>
                            </div>
                        </div>
                    </div>

                </div>

                <Btn title="Apply" />

            </div >
        </>
    );
}

export default Filters;
