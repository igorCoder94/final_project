import React from 'react';

export const PhotoList = (props) => {
    return(
        <div>
            <div className='team-photos'>
                <div>{props.firstBarberName}</div><img className='team-photo' src={props.barberOne} alt=''></img>
                <img className='team-photo' src={props.barberTwo} alt=''></img><div>{props.secondBarberName}</div>
            </div>
        </div>
    )
}