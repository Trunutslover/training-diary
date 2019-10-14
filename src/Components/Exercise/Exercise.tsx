import React from 'react';

interface Props {
    number: number,
    name: string,
    sets: number[]
}

const Exercise = ({number, name, sets}: Props): React.ReactElement => {
    const setsList = sets.map((value, index) => <span key={index}>{value} </span>);

    return (
        <div>
            number - {number} name - {name} sets - {setsList}
        </div>
    )
};

export default Exercise;