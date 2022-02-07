import { Link } from 'react-router-dom';
import './studentCard.css';

function studentCard({ name, avatar }) {
    return (
        <Link to={name}>
            <div className="card">
                <img src={avatar} className="avatar" />
                <h2 className='card-heading'>{name}</h2>
            </div>
        </Link> 
    )
}

export default studentCard