import {faBell, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import Logo from '../../images/st-suite-logo.png';
import Automation from '../../images/automation-icon.png';
import Portfolio from '../../images/portfolio-icon.png';
import Trading from '../../images/trading-icon.png';
import Profile from '../../images/profile.png';




const ExpandableMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`expandable-menu ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
    >
      <div className="menu-logo">
        <img
          src={Logo}
          alt="logo"
          className={isExpanded ? 'expanded-logo' : 'collapsed-logo'}
        />
      </div>

      <div className="menu-items">
        <div>
            <div className="menu-item">
                <FontAwesomeIcon icon={faBell} />
                <span className="icon-name">{isExpanded ? 'Alert' : ''}</span>
            </div>
            <div className="menu-item">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span className="icon-name">{isExpanded ? 'Training' : ''}</span>
            </div>
            <div className="comingSoon">
                <div className="menu-item">
                    <img
                        src={Automation}
                        alt="logo"
                        className={isExpanded ? 'expanded-icon' : 'collapsed-icon'}
                    />
                    <span className="icon-name">{isExpanded ? 'Automation' : ''}</span>
                    <span className="coming-soon-text">Coming Soon</span>
                </div>
                <div className="menu-item">
                    <img
                        src={Portfolio}
                        alt="logo"
                        className={isExpanded ? 'expanded-icon' : 'collapsed-icon'}
                    />
                    <span className="icon-name">{isExpanded ? 'Portfolio' : ''}</span>
                    <span className="coming-soon-text">Coming Soon</span>
                </div>
                <div className="menu-item">
                    <img
                        src={Trading}
                        alt="logo"
                        className={isExpanded ? 'expanded-icon' : 'collapsed-icon'}
                    />
                    <span className="icon-name">{isExpanded ? 'Trading' : ''}</span>
                    <span className="coming-soon-text">Coming Soon</span>
                </div>
            </div>
        </div>
        <div>
            <div className="profile">
                <img
                    src={Profile}
                    alt="logo"
                    className={isExpanded ? 'expanded-profile' : 'collapsed-profile'}
                />
                <div>
                    <div className="profile-name">{isExpanded ? 'Moni Roy' : ''}</div>
                    <div className="profile-spec">{isExpanded ? 'Beginner' : ''}</div>
                </div>
            </div>
            <div className='co-v'>
                <span>{isExpanded ? 'Street Suite 2.0' : ''}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;
