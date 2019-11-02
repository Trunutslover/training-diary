import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingsInterface} from "../../types";
import {NavLink} from "react-router-dom";
import classes from './Trainings.module.scss';
import cn from 'classnames/bind';
import {getTrainingsTC} from "../../redux/trainingsReducer";

const cx = cn.bind(classes);

interface Props {
    trainings: TrainingsInterface[],
    getTrainingsTC: () => {}
}

const Trainings = ({trainings, getTrainingsTC}: Props): React.ReactElement => {
    useEffect(() => {
        getTrainingsTC();
    }, []);

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
        </main>
    )
};

const mapStateToProps = (state: any) => {
    return {
        trainings: state.trainings
    }
};

const mapDispatchToProps = {
    getTrainingsTC
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);