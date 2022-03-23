import { Container, Row, Col } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './portfolio.css';

function Portfolio() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [student, setStudent] = useState()
    const name = useParams()
    useEffect( () => {
        fetch(`https://digital-media-api.herokuapp.com/api/v1/students/${name.name}`)
                .then(response => response.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setStudent(data.data)
                    }
                )
    })

    return (
        <Container>
            <h2 className='subheading'>{student.attributes.name}</h2>
            <img src={student.attributes.avatar_url}></img>
            <p>{student.attributes.about}</p>
        </Container>
    )
}

export default Portfolio