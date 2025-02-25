import React from 'react';
import Banner from '../modules/Banner';

function Movies(props) {
    return (
        <>
            <h1>영화야!</h1>
            {/* 1. 배너 컴포넌트 */}
            <Banner catName="MOVIES" />
        </>
    );
}

export default Movies;