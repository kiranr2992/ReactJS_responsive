import React from "react";
import './search.css';
import image from "../../assets/background.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {

    return (
        <div className="search_container" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center' }}>
            <div className="search-components">
                <div className="S1">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />&nbsp;&nbsp;

                        <input type="text" placeholder="What?" />
                </div>
                <div className="S1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />&nbsp;&nbsp;

                        <input type="text" placeholder="Where?" />
                </div>
                <div className="find">
                    <button>Find Job</button>
                </div>
            </div>
        </div>
    )
}

export default Search;



