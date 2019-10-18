import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {TrainingInterface} from "../../types";
import {NavLink} from "react-router-dom";
import classes from './Trainings.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(classes);

interface Props {
    trainings: TrainingInterface[]
}

const Trainings = ({trainings}: Props): React.ReactElement => {
    const listOfTrainings = trainings.map((value: TrainingInterface) => <li key={value.id} className={cx({item:true})}><NavLink to={`/trainings/${value.id}`} className={cx({link: true})}>Training {value.id}</NavLink></li>);

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

};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Trainings);