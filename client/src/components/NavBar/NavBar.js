import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './NavBar.scss';

export const NavBar = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
            .then((res) => res.json())
            .then((json) => {
                if (json.quotes && Array.isArray(json.quotes)) {
                    const results = json.quotes.filter((quote) => {
                        return (
                            value &&
                            quote &&
                            quote.author &&
                            quote.author.toLowerCase().includes(value)
                        );
                    });
                    setResults(results);
                } else {
                    console.log("No quotes data found in the JSON.");
                }
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input type="text" placeholder='Type to search authors...' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
