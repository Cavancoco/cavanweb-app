import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../actions';

class About extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle('About'));
    }

    render() {
        const listStyle = {
            padding: '0 0 5px 0'
        };
        
        return (
            <div style={{padding: Ext.os.is.Phone ? '0 10px': '0 20px'}}>
                <h2 style={{fontWeight: 100}}>The Art of Apps</h2>
				
			<div class="content">
				<p><b>The Art of Apps helps you to maintain your websites and mobile Apps. </b> </p>
					<p>It is easy to add <b>news</b> or <b> events,</b> you can update existing pages and you are able to <b>upload</b> images and documents. </p>
					<h3>How to access your website</h3>
					<p>You can <b>login</b> with your username and password to access your website directly. </p>
					<p>If you don't have a username and password, you can <a id="ctl00_cphMidSection_hlRegister" href="#">Register here</a> &nbsp;and we will set up your account.</p>
					<h3>Easy to use</h3>
					<p>Creating a site together is as easy as editing a document and you always control who has access, whether it's just yourself, your team, or your whole organization.</p>
					<p>People can work together on a site to add file attachments, and new free-form content. </p>
					<p>The Cavanweb application is accessible from any internet connected computer.</p>
					<h3>Any questions?</h3>
					<p>If you have a question you need to know that our Webmaster is available to help you.</p>
					<p>Our Webmaster is Daniel Peeters and he can be contacted on 049 437 8380 or <a href="mailto:dpeeters@cavancoco.ie">dpeeters@cavancoco.ie</a></p>
				</div>
			
                <div>
                    This app is built with <a href="https://github.com/sencha/extjs-reactor">Sencha ExtReact 6.5</a> and uses the following libraries:
                    <ul style={{listStyle: 'none', padding: '0'}}>
                        <li style={listStyle}><a href="https://facebook.github.io/react/">React 15.4</a></li>
                        <li style={listStyle}><a href="http://redux.js.org/">Redux 3.6</a></li>
                        <li style={listStyle}><a href="http://redux.js.org/">React Router 4.1</a></li>
                    </ul>
                </div>
                <p>
                    The source code for this app is available <a href="https://github.com/sencha/extjs-reactor/tree/master/packages/reactor-conference-app">here</a>.
                </p>
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return { };
}

export default connect(mapStateToProps)(About);