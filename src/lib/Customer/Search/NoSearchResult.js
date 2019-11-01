import React from 'react';

function NoSearchResult({ query }) {
    return (
        <>
            <div className="container">
                <div className="row no-search-result">
                    <div className="col-sm-12 col-md-6 mx-auto">
                        <div className="mb-6">
                            <h1>{query}</h1>
                            <p className="lead">Vi fant ingen produkter! Vil du lage en Tipio?</p>
                        </div>
                        <a className="circle-cta" href="">
                            <img alt=""/>
                            <span className="d-block">Lag Tipio</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoSearchResult;
