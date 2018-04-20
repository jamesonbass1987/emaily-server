import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

// import { bindActionCreators } from "redux";

class Header extends Component {
    
    renderLinks() {
        switch (this.props.currentUser) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [<li key="1">
                            <Payments>Add Token</Payments>
                        </li>,
                        <li key="2">
                            <a href="/api/logout">Logout</a>
                        </li>
                        ]
        }   
    }
    
    render(){

        return <nav>
            <div className="nav-wrapper">
                <Link 
                    to={this.props.currentUser ? 
                                    '/surveys' :
                                    '/'} 
                    className="left brand-logo"
                >
                    Emaily
                </Link>
                <ul className="right">
                    {this.renderLinks()}
                </ul>
            </div>
          </nav>;
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return { currentUser };
};

export default connect(mapStateToProps)(Header);