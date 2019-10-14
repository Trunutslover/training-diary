import React, {useState} from 'react';
import {actionInterface} from "../../../types";

interface Props {
    trainingId: number,
    exerciseNumber: number,
    setNumber: number,
    isReps: boolean,
    value: string,
    setValue: (trainingId: number, exerciseNumber: number, setNumber: number, isReps: boolean, value: string) => actionInterface
}

const EditableSpan = ({trainingId, exerciseNumber, setNumber, isReps, value, setValue}: Props): React.ReactElement => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const onBlurHandler = () => {
        setEditMode(false);
        setValue(trainingId, exerciseNumber, setNumber, isReps, inputValue);
    };

    if(editMode) {
        return <input type={`number`} value={inputValue} autoFocus={true} onChange={(e) => setInputValue(e.target.value)} onBlur={() => onBlurHandler()}/>
    } else {
        return (
            <span onClick={() => setEditMode(true)}>{value}</span>
        )
    }
};

export default EditableSpan;