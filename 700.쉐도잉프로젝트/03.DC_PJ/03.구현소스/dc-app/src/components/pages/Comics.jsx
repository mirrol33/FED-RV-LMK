import React from 'react';
import Banner from '../modules/Banner';

function Comics(props) {
    return (
        <>
            <h1>코믹스야!</h1>
            {/* 1. 배너 컴포넌트 */}
            <Banner catName="COMICS" />
        </>
    );
}

export default Comics;