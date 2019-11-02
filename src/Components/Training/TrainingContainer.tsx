import React from 'react';
import {
    addExerciseAC,
    addSetAC, removeExerciseAC,
    removeSetAC,
    setExerciseNameAC,
    setRepsAC, setTimestampAC,
    toggleIsDoneAC
} from "../../redux/trainingReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Training from "./Training";
import {actionInterface, TrainingInterface} from "../../types";
import {useRouteMatch} from "react-router";

interface Props {
    training: TrainingInterface,
    toggleIsDoneAC: () => actionInterface,
    addSetAC: (exerciseNumber: number) => actionInterface,
    removeSetAC: (exerciseNumber: number, setNumber: number) => actionInterface,
    setRepsAC: (exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface,
    setExerciseNameAC: (exerciseNumber: number, value: string) => actionInterface,
    addExerciseAC: () => actionInterface,
    removeExerciseAC: (exerciseNumber: number) => actionInterface,
    setTimestampAC: (timestamp: number) => actionInterface
}

const TrainingContainer = (props: Props): React.ReactElement => {
    const match: any = useRouteMatch('/trainings/:trainingId');

    if(parseInt(match.params.trainingId) === props.training.id) {
        return (
            <Training
                id={props.training.id}
                timestamp={props.training.timestamp}
                isDone={props.training.isDone}
                exercises={props.training.exercises}
                toggleIsDoneAC={props.toggleIsDoneAC}
                addSetAC={props.addSetAC}
                removeSetAC={props.removeSetAC}
                setRepsAC={props.setRepsAC}
                setExerciseNameAC={props.setExerciseNameAC}
                addExerciseAC={props.addExerciseAC}
                removeExerciseAC={props.removeExerciseAC}
                setTimestampAC={props.setTimestampAC}
            />
        )
    } else {
        return <div>Preloader</div>
    }

};

const mapStateToProps = (state: any) => {
    return {
        training: state.training
    }
};

const mapDispatchToProps = {
    toggleIsDoneAC,
    addSetAC,
    removeSetAC,
    setRepsAC,
    setExerciseNameAC,
    addExerciseAC,
    removeExerciseAC,
    setTimestampAC
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(TrainingContainer);