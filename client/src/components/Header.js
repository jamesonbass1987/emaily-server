import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { bindActionCreators } from "redux";

class Header extends Component {
    
    renderContent() {
        switch (this.props.currentUser) {
            case null:
                return;
            case false:
                return <a href="/auth/google">Login With Google</a>;
            default:
                return <a href="/api/logout">Logout</a>;
        }   
    }
    
    render(){

        const logoLinkRoute = this.props.currentUser ? 
                                    '/surveys' :
                                    '/';

        return <nav>
            <div className="nav-wrapper">
                <Link 
                    to={logoLinkRoute} 
                    className="left brand-logo"
                >
                    Emaily
                </Link>
                <ul className="right">
                    <li>{this.renderContent()}</li>
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