import { Container, Row, Col } from 'react-bootstrap';
import studentCard from '../StudentCard/studentCard';
import './portfolio.css';

function portfolio() {
    const getStudent = {
        id: 1,
        type: 'student',
        attributes: {
            name: 'Sparky',
            avatar_url: 'https://picsum.photos/200',
            code: 'another url',
            major: 'dog',
            enrolled: true,
            about: 'I am a good boy',
        }
    }

    return (
        <Container>
            <h2 className='subheading'>{getStudent.attributes.name}</h2>
            <img src={getStudent.attributes.avatar_url}></img>
            <p>{getStudent.attributes.about}</p>
        </Container>
    )
}

export default portfolio