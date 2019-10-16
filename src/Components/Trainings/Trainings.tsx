import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingInterface} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
    trainings: TrainingInterface[]
}

const Trainings = ({trainings}: Props): React.ReactElement => {
    const listOfTrainings = trainings.map((value: TrainingInterface) => <li key={value.id}><NavLink to={`/trainings/${value.id}`}>Training - {value.id}</NavLink></li>);

    return (
        <nav>
            {listOfTrainings}
        </nav>
    )
};

const mapStateToProps = (state: any) => {
    return {
        trainings: state.trainings
    }
};

const mapDispatchToProps = {

};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);