import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dispatchActions from "../../store/actions/index";

class SurveyList extends Component {

    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div key={survey._id} className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    const { surveys } = state.surveys;
    return { surveys };
};



export default connect(mapStateToProps, dispatchActions)(SurveyList);