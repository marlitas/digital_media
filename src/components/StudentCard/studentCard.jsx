import { Link } from 'react-router-dom';
import {useState} from 'react';
import './studentCard.css';

function studentCard({ name, avatar, id }) {
    return (
        <Link to={{pathname: name, state: { params: {id: id}}}}>
            <div className="card">
                <img src={avatar} className="avatar" />
                <h2 className='card-heading'>{name}</h2>
            </div>
        </Link> 
    )
}

export default studentCard