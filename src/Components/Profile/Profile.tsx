import React from 'react';
import classes from './Profile.module.scss';
import cn from 'classnames/bind';
import {compose} from "redux";
import {connect} from "react-redux";

const cx = cn.bind(classes);

interface Props  {
    name: string,
    avatar: string | undefined,
    age: number,
    sex: boolean
}

const Profile = ({name, avatar, age, sex}: Props): React.ReactElement => {
    return (
        <main className={cx({Profile: true})}>
            <h1>Profile</h1>
            <ul>
                <li>Avatar: {avatar}</li>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Sex: {sex ? `male` : `female`}</li>
                <li>Physical data</li>
            </ul>
        </main>
    )
};

const mapStateToProps = (state: any) => {
    return {
        name: state.profile.name,
        avatar: state.profile.avatar,
        age: state.profile.age,
        sex: state.profile.sex
    }
};

const mapDispatchToProps = {

};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Profile);