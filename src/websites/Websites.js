import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, List, Button, Panel } from '@extjs/ext-react';
import AppBar from '../AppBar';
import { Template } from '@extjs/reactor';
import { loadWebsites, loadWebsite } from './actions';
import { setTitle } from '../actions';
import Website from './Website';
import WebsiteForm from './WebsiteForm';

class Websites extends Component {

    itemTpl = new Template(data => (
        <div className="app-list-content">
            <div className="app-list-headshot" style={{backgroundImage: `url(${data.avatar_url})`}}></div>
            <div className="app-list-text">
                <div className="app-list-item-title">{data.name}</div>
                <div className="app-list-item-details">{data.url} - {data.status}</div>
            </div>
        </div>
    ))

    componentDidMount = () => {
        this.props.dispatch(loadWebsites());
        this.updateData();
    }

    componentDidUpdate = (prevProps) => {
        this.updateData(prevProps)
    }

    updateData = (prevProps) => {
        const id = this.props.match.params.id;
        
        if (!prevProps || prevProps.match.params.id !== id) {
            this.props.dispatch(loadWebsite(id))
        }


    }

    onItemTap = (list, index, target, record) => {
        self.location.hash = `/websites/${record.id}`;
    }

    render() {
        const { store, record, match, showForm, ...props } = this.props;

		const banner = (
            <Container docked="top" className="app-banner">
                <span className="app-banner-content">The Art of Apps</span>
            </Container>
        )

        return (
            <Container 
                activeItem={(match.params.id ? 1 : 0)}
                platformConfig={{
                    "!phone": {
                        layout: 'hbox'
                    },
                    "phone": {
                        layout: { 
                            type: 'card', 
                            animation: 'slide' 
                        }
                    }
                }}
            >
				{ Ext.os.is.Phone && banner}
                <List 
                    {...props}
                    store={store}
                    itemTpl={this.itemTpl}
                    onItemTap={this.onItemTap}
                    itemCls="app-list-item"
                    rowLines
                    flex={1}
                    cls="app-list"
                    maxWidth={!Ext.os.is.Phone && record && 500}
                /> 
                { (Ext.os.is.Phone || record) && <WebsiteForm website={record} flex={1}/> }
				
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return state.websites;
}

export default connect(mapStateToProps, null, null, { withRef: true })(Websites);