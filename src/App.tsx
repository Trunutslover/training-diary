import React from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import cn from 'classnames/bind';
import Trainings from "./Components/Trainings/Trainings";

const cx = cn.bind(classes);

const App: React.FC = () => {
  return (
    <div className={cx({App: true})}>
      Training diary
        <Trainings />
    </div>
  );
};

export default App;
