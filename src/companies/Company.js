import React, { Component } from 'react';
import { Container, FieldSet, TextField, TextAreaField, ToggleField, FileField, Button, FormPanel } from '@extjs/ext-react';
import WebsitesList from '../websites/WebsitesList';
import { connect } from 'react-redux';
import { setTitle } from '../actions';

class Company extends Component {
	
	constructor({ websites }) {
        super();

        this.store = Ext.create('Ext.data.ChainedStore', {
            autoDestroy: true,
            source: websites && websites.store
        });
    }

    componentDidMount = () => this.filterSessions()
    componentDidUpdate = () => this.filterSessions()

    filterSessions() {
        const { company } = this.props;

        if (company && company.data.sessions) {
            this.store.filter({
                value: company.data.sessions,
                property: 'id',
                operator: 'in'
            });
        }
    }

    render() {
        const { company, ...props } = this.props;
        const data = company && company.data;
		

        return (
            <Container {...props} layout="vbox" scrollable padding={20}>
                { company && (
                    <FormPanel shadow>
			    		<div className="app-speaker-ct">
                            <img className="app-speaker-image" src={data.avatar_url}/>
							<ToggleField boxLabel="Active" value={true}  width={100}/>
                        </div>
						<div className="app-speaker-text">
							<FieldSet title="About the company" instructions="Complete the form.">
								<FileField label="Logo" name="photo" accept="image" labelAlign="top"/>
								
								<TextField label="Name" value={data.name} labelAlign="placeholder"/>
								<TextField label="Website" value={data.title} labelAlign="placeholder"/>
								<TextAreaField label="Description" value={data.bio} maxRows={10} labelAlign="placeholder"/>
							</FieldSet>
							<Button text="Save" ui="action raised" />
						</div>
                        <h2 style={{marginTop: '40px', color: '#999' }}>Websites</h2>
                        <Container shadow>
                            <WebsitesList
                                dataStore={this.store}
                                scrollable={false}
                                showTime
                                eagerLoad
                            />
                        </Container>
					</FormPanel>
                )}
            </Container>
        )
    }
}

const mapStateToProps = ({ websites }) => {
    return { websites };
}

export default connect(mapStateToProps)(Company);
