import React from 'react';

export function createTpl({ getQuery }) {
    return data => {

        return (
            <div className="app-list-content">
                <div className="app-list-text">

                    <div className="app-list-item-title">{data.name}</div>
                </div>
            </div>
        )
    }
}