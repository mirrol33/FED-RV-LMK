import React from 'react';
import Banner from '../modules/Banner';

function News(props) {
    return (
        <>
            <h1>뉴스야!</h1>
            {/* 1. 배너 컴포넌트 */}
            <Banner catName="NEWS" />
        </>
    );
}

export default News;