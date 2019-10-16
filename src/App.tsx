import React from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import cn from 'classnames/bind';
import Trainings from "./Components/Trainings/Trainings";
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import TrainingContainer from "./Components/Training/TrainingContainer";

const cx = cn.bind(classes);

const App: React.FC = () => {

    return (
        <div className={cx({App: true})}>
            <Header/>
            <Switch>
                <Route path={`/trainings/:trainingId`}>
                    <TrainingContainer />
                </Route>
                <Route path={`/trainings`}>
                    <Trainings />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
