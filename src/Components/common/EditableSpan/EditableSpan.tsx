import React, {useState} from 'react';
import {actionInterface} from "../../../types";
import classes from './EditableSpan.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(classes);

interface Props {
    trainingId: number,
    exerciseNumber: number,
    setNumber?: number,
    isReps?: boolean,
    value: string,
    setValue: (trainingId: number, exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface
}

const EditableSpan = ({trainingId, exerciseNumber, value, setValue, setNumber, isReps}: Props): React.ReactElement => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const onBlurHandler = () => {
        setEditMode(false);
        setValue(trainingId, exerciseNumber, inputValue, setNumber, isReps);
    };

    if(editMode) {
        return <input className={cx({input: true, number: setNumber !== undefined})} type={setNumber !== undefined ? `number` : `text`} value={inputValue} autoFocus={true} onChange={(e) => setInputValue(e.target.value)} onBlur={() => onBlurHandler()}/>
    } else {
        return (
            <span className={cx({span: true})} onClick={() => setEditMode(true)}>{value}</span>
        )
    }
};

export default EditableSpan;