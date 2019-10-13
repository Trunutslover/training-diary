import React from 'react';
import {toggleIsDoneAC} from "../../redux/trainingsReducer";
import Training from "../Training/Training";
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingInterface} from "../../types";

const Trainings = (props: any) => {
    const listOfTrainings = props.trainings.map((value: TrainingInterface) => <Training key={value.id} id={value.id} isDone={value.isDone} exercises={value.exercises} toggleIsDoneAC={props.toggleIsDoneAC} />)

    return (
        <div>
            {listOfTrainings}
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        trainings: state.trainings
    }
};

const mapDispatchToProps = {
    toggleIsDoneAC
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);