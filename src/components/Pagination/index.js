import React from 'react';

function Pagination(props) {
    return(
        <section className="section">
            <nav className="pagination" role="navigation" aria-label="pagination">
            <a href="/" className="pagination-previous" title="This is the first page" disabled>Previous</a>
            <a href="/" className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li>
                <button id="1" onClick={props.handlePageClick} className="pagination-link" aria-label="Page 1" aria-current="page">1</button>
                </li>
                <li>
                <button id="2" onClick={props.handlePageClick} className="pagination-link" aria-label="Goto page 2">2</button>
                </li>
                <li>
                <button id="3" onClick={props.handlePageClick} className="pagination-link" aria-label="Goto page 3">3</button>
                </li>
            </ul>
            </nav>
        </section>
    );
}

export default Pagination;
