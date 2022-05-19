import React from 'react';

import { useHistory } from 'react-router-dom'

function HomePage() {
    const history = useHistory();

    function handleClick() {
        history.push("/blogposts")
    }
    return (

        <>
            <div className="page-container">
                <h1>Prived Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequuntur et eum ipsum, nam non numquam odit optio voluptate!</p>
            </div>

            <button type="button" onClick={handleClick}>
                login
            </button>
        </>
    );
}

export default HomePage;