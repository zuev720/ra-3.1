import React from 'react';
import {Star} from './Star/Star';
const shortid = require('shortid');

export function Stars(props) {
    if (props.count <= 0 || props.count > 5) return null;
    const list = () => {
        const array = [];
        for (let i = 1; i <= props.count; i++) {
            array.push(
                <Star key={shortid.generate()}/>
            )
        }
        return array;
    }

    return (
        <div className={'Stars'}>
            <ul className="card-body-stars u-clearfix">
                {list()}
            </ul>
        </div>)
}

Stars.defaultProps = {
    count: 0,
}
