import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Heading = () =>  {
    return (

            <div className="headingContainer">
                <h1 className='pageTitle'>ALERTS</h1>
                <div className="search">
                    <input type="input" placeholder="Search By" />
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                </div>
                <FontAwesomeIcon icon={faBell} size="2xl" style={{color: "#74C0FC",}} />
            </div>
    
    );
  }
  
  export default Heading;