import React, { Component } from 'react';
import Link  from 'next/link';

class Paginate extends Component {
    render() {
        return (
            <ul className="actions pagination">
                <li>
                    <Link href="/">
                        <a className="disabled button large previous">Previous Page</a>
                    </Link>
                </li>
                <li><Link href="/">
                        <a className="button large next">Next Page</a>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Paginate;