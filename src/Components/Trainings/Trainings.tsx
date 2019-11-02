import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingInterface, TrainingsInterface} from "../../types";
import {NavLink} from "react-router-dom";
import classes from './Trainings.module.scss';
import cn from 'classnames/bind';
import {getTrainingsTC, postTrainingTC} from "../../redux/trainingsReducer";

const cx = cn.bind(classes);

interface Props {
    trainings: TrainingsInterface[],
    getTrainingsTC: () => {},
    postTrainingTC: (training: TrainingInterface) => {}
}

const Trainings = ({trainings, getTrainingsTC, postTrainingTC}: Props): React.ReactElement => {
    useEffect(() => {
        getTrainingsTC();
    }, []);

    const onAddTrainingClick = () => {
        postTrainingTC({
            id: 0,
            timestamp: new Date().getTime(),
            isDone: false,
            exercises: []
        });
    };

    const listOfTrainings = trainings.map((value: TrainingsInterface) => {
        const date = new Date(value.timestamp);

        return <li key={value.id} className={cx({item:true})}>
            <NavLink to={`/trainings/${value.id}`} className={cx({link: true})}>Training {value.id} from {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</NavLink>
        </li>
    });

    return (
        <main className={cx({Trainings: true})}>
            <h1 className={cx({title: true})}>List of your trainings</h1>
            <nav className={cx({menu: true})}>
                {listOfTrainings}
            </nav>
            <button className={cx({addTrainingButton: true})} onClick={onAddTrainingClick}>Add new training</button>
        </main>
    )
};

const mapStateToProps = (state: any) => {
    return {
        trainings: state.trainings
    }
};

const mapDispatchToProps = {
    getTrainingsTC,
    postTrainingTC
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);