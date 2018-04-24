import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {

    state = {
        showFormReview: false
    };

    updateFormReview() {
        this.setState({
            showFormReview: !this.state.showFormReview
        })
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() =>  this.updateFormReview()} />
        }

        return <SurveyForm onSurveySubmit={() => this.updateFormReview()} />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);