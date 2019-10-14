import React from 'react';
import {addSetAC, removeSetAC, setRepsAC, toggleIsDoneAC} from "../../redux/trainingsReducer";
import Training from "../Training/Training";
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingInterface} from "../../types";

const Trainings = (props: any): React.ReactElement => {
    const listOfTrainings = props.trainings.map((value: TrainingInterface) => <Training key={value.id} id={value.id}
                                                                                        isDone={value.isDone}
                                                                                        exercises={value.exercises}
                                                                                        toggleIsDoneAC={props.toggleIsDoneAC}
                                                                                        addSetAC={props.addSetAC}
                                                                                        removeSetAC={props.removeSetAC}
                                                                                        setRepsAC={props.setRepsAC}
    />);

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
    toggleIsDoneAC,
    addSetAC,
    removeSetAC,
    setRepsAC
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);