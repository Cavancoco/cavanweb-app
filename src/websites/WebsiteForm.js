import React, { Component } from 'react';
import { Container, FieldSet, TextField, TextAreaField, ToggleField, FileField, Button, FormPanel  } from '@extjs/ext-react';
import { connect } from 'react-redux';
import { Template } from '@extjs/reactor';
import { addWebsite, loadWebsite } from './actions';
import { setTitle } from '../actions';

class WebsiteForm extends Component {
	
	ViewTpl = new Template(data => (
			<div>
				<div className="app-website-ct">
					<img className="app-website-image" src={data.logo_url}/>

					<div className="app-website-text">
						<div className="app-website-name">{data.name}</div>
						<div className="app-website-title">{data.url}</div>
						<div className="app-website-company">{data.status}</div>
						<div className="app-website-bio">{data.description}</div>
						<Button text="Edit" ui="action raised" handler={() => this.setForm()} width="100px" />
						
					</div>
				</div>

			</div>
		))

	FormTpl = new Template(data => (
			<FormPanel ref={form => this.form = form} shadow>
							<FieldSet title="About the company" instructions="Complete the form.">
								
								<TextField label="Name" value={data.name} labelAlign="placeholder"/>
								<TextField label="Website" value={data.url} labelAlign="placeholder"/>
								<TextAreaField label="Description" value={data.description} maxRows={10} labelAlign="placeholder"/>
							</FieldSet>
							<Button text="Save" ui="action raised" handler={() => this.setView()} />
					</FormPanel>
		))
	
	
	setForm() {
		
        this.container.setTpl(this.FormTpl); // set the form template
    }

	setView() {
		this.props.dispatch(addWebsite({
			"logo_url": "resources/avatars/02.jpg",
			"name": "Cavan Test",
			"url": "http://www.cavantest.ie",
			"status": "Active",
			"description": "Test"
		}));
        this.container.setTpl(this.ViewTpl); // set the view template
    }


    render() {
        const { website, dispatch, ...props } = this.props;
        const data = website && website.data;

        return (
            <Container {...props} ref={ container => this.container = container } layout="vbox" data={data} scrollable padding={20} tpl={ this.ViewTpl } />
        )
    }
}

const mapStateToProps = (state) => {
    return { };
}

export default connect(mapStateToProps)(WebsiteForm);
