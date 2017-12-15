import React, { Component } from 'react';
import { Container, Button, FieldSet, TextField, TextAreaField, ToggleField, FileField, FormPanel } from '@extjs/ext-react';
import { connect } from 'react-redux';
import { Template } from '@extjs/reactor';
import { toggleForm, loadWebsite } from './actions';
import { setTitle } from '../actions';

class Website extends Component {
	
	
	constructor(props) {
      super(props);
      this.state = { template: new Template(data => (
			<div>
				<div className="app-website-ct">
					<img className="app-website-image" src={data.logo_url}/>

					<div className="app-website-text">
						<div className="app-website-name">{data.name}</div>
						<div className="app-website-title">{data.url}</div>
						<div className="app-website-company">{data.status}</div>
						<div className="app-website-bio">{data.description}</div>
						<Button text="Save" ui="action raised" handler={this.setForm} />
					</div>
				</div>

			</div>
		)) };
   }

	  
	
	setForm = () => {
         this.setState({ template: new Template(data => (
			<FormPanel shadow>
							<FieldSet title="About the company" instructions="Complete the form.">
								
								<TextField label="Name" value={data.name} labelAlign="placeholder"/>
								<TextField label="Website" value={data.url} labelAlign="placeholder"/>
								<TextAreaField label="Description" value={data.description} maxRows={10} labelAlign="placeholder"/>
							</FieldSet>
							<Button text="Save" ui="action raised" handler={this.setView} />
					</FormPanel>
		)) });
     }
	
	setView = () => {
         this.setState({ template: new Template(data => (
			<div>
				<div className="app-website-ct">
					<img className="app-website-image" src={data.logo_url}/>

					<div className="app-website-text">
						<div className="app-website-name">{data.name}</div>
						<div className="app-website-title">{data.url}</div>
						<div className="app-website-company">{data.status}</div>
						<div className="app-website-bio">{data.description}</div>
						<Button text="Save" ui="action raised" handler={this.setForm} />
					</div>
				</div>

			</div>
		)) });
     }
	

    render() {
        const { website, ...props } = this.props;
        const data = website && website.data;
		
        return (
            <Container {...props} layout="vbox" itemId="webCtr" data={data} scrollable padding={20} tpl={ this.state.template } />
        )
    }
}

const mapStateToProps = (state) => {
    return { };
}

export default connect(mapStateToProps)(Website);
