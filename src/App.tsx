import React from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import cn from 'classnames/bind';
import Trainings from "./Components/Trainings/Trainings";
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";

const cx = cn.bind(classes);

const App: React.FC = () => {
    return (
        <div className={cx({App: true})}>
            <Header/>
            <Route path={`/trainings`} render={() => <Trainings/>}/>
        </div>
    );
};

export default App;
