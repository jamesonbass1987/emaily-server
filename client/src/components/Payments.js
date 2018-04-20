import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as dispatchActions from "../store/actions/index";

class Payments extends Component {

    render() {

        debugger;

        return (
            <StripeCheckout
                token={token => this.props.handleToken(token)}
                amount={500} // cents
                name="Emaily"
                description="Add 5 email credits for $5.00"
                currency="USD"
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn"> Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, dispatchActions)(Payments);