import { FunctionComponent, useEffect, useState } from 'react';

interface Props { 
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
};

export const FilmDetails: FunctionComponent<Props> = ({ title, genre, seasonsCount }) => {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`count: ${count}`);
        // return () => { }; // Cleanup
    }, [count]);
    return (
        <div>
            <div>
                <p>{title}</p>
                <p>{genre}</p>
                <p>{seasonsCount}</p>
            </div>
            <div>
                <button onClick={ () => { count =- 1 }}>-</button>
                { count }
                <button onClick={ () => { count =+ 1 }}>+</button>
            </div>
        </div>
    );
};