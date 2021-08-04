import React, { useState } from 'react';

function Searchbar(props) {
    const [searchKeyword, setValue] = useState("eminem")
    const searchHandler = () => { props.searchh(searchKeyword) };
    return (
        <div className="search-bar-cont">
            <input className="search-bar" value={searchKeyword} onChange={(event) => { setValue(event.target.value) }} />
            <button className="submit-but" onClick={searchHandler}>Search</button>
        </div>
    );
}

export default Searchbar;