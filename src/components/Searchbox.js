import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
    return (
        <div className="p2">
            <input 
                className="pa3 ba b-- green bg-lighttest-blue" type="search" 
                placeholder="search robots" 
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;