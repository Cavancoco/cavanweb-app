import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '@extjs/ext-react';
import { connect } from 'react-redux';
import { push } from 'react-router';
import { createTpl } from './DomainTpl';

class WebsitesList extends Component {
    
    static propTypes = {
        dataStore: PropTypes.any.isRequired,
        flex: PropTypes.number,
        onSelect: PropTypes.func,
        eagerLoad: PropTypes.bool
    }

    constructor() {
        super();

        this.itemTpl = createTpl({ 
            getQuery: this.getQuery
        });
    }

    getQuery = () => {
        return this.props.query;
    }

    onItemTap = (list, index, target, record) => {
        if (record) {
            self.location.hash = `/websites/${record.id}`;
        }

        if (this.props.onSelect) {
            this.props.onSelect(record);
        }
    }

    listRef = list => this.list = list;

    render() {
        const { domain, query, dataStore, onSelect, pinHeaders, ...listProps } = this.props;

        return (
            <List 
                ref={this.listRef}
                hideMode="offsets"
                {...listProps}
                store={dataStore}
                selection={domain}
                itemTpl={this.itemTpl}
                grouped
                rowLines
                itemCls={`app-list-item ${Ext.os.is.Phone ? 'x-item-no-select' : ''}`}
                cls="app-list"
                onItemTap={this.onItemTap}
                pinHeaders={pinHeaders}
                infinite={pinHeaders}
                variableHeights={pinHeaders}
                emptyText="No domains found."
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(WebsitesList);