import React, {useState} from 'react';
import classes from './EditableDateTime.module.scss';
import cn from 'classnames/bind';
import {actionInterface} from "../../../types";

const cx = cn.bind(classes);

interface Props {
    timestamp: number,
    type: string,
    setupFunction: (timestamp: number) => actionInterface
}

const EditableDateTime = ({timestamp, type, setupFunction}: Props): React.ReactElement => {
    const date = new Date(timestamp);
    const maxYear = new Date().getFullYear();
    let value: number;
    let min: number = 0;
    let max: number = 0;

    switch (type) {
        case (`fullYear`): {
            value = date.getFullYear();
            min = 1970;
            max = maxYear;
            break;
        }

        case (`month`): {
            value = date.getMonth() + 1;
            min = 1;
            max = 12;
            break;
        }

        case (`day`): {
            value = date.getDate();
            min = 1;
            max = 31;
            break;
        }

        case (`hours`): {
            value = date.getHours();
            min = 0;
            max = 23;
            break;
        }

        case (`minutes`): {
            value = date.getMinutes();
            min = 0;
            max = 59;
            break;
        }

        default: {
            value = 0;
        }
    }

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const onBlurHandler = () => {
        setEditMode(false);

        switch (type) {
            case (`fullYear`): {
                date.setFullYear(inputValue);
                break;
            }

            case (`month`): {
                date.setMonth(inputValue - 1);
                break;
            }

            case (`day`): {
                date.setDate(inputValue);
                break;
            }

            case (`hours`): {
                date.setHours(inputValue);
                break;
            }

            case (`minutes`): {
                date.setMinutes(inputValue);
                break;
            }

            default: {

            }
        }

        setupFunction(date.getTime());
    };

    if(editMode) {
        return <input className={cx({input: true, fullYear: type === `fullYear`})} type={`number`} value={inputValue} min={min} max={max} autoFocus={true} onChange={(e) => setInputValue(parseInt(e.target.value))} onBlur={onBlurHandler}/>
    } else {
        return <span className={cx({span: true})} onClick={() => setEditMode(true)}>{value}</span>
    }
};

export default EditableDateTime;