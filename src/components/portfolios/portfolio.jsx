import { Container, Row, Col } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './portfolio.css';

function Portfolio() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [student, setStudent] = useState({})
    const name = useParams()

    useEffect( () => {
        fetch(`https://digital-media-api.herokuapp.com/api/v1/students/${name.name}`)
                .then(response => response.json())
                .then(
                    (data) => {
                        setStudent(data.data)
                        setIsLoaded(true); 
                    }
                )
    })



    if (isLoaded) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className='subheading'>{student.attributes.name}</h2>
                        <p>{student.attributes.about}</p>
                    </Col>
                    <Col s lg={8}>
                        <img className='self-portrait' src={student.attributes.avatar_url}></img>
                    </Col>
                </Row>
            </Container>
        )
    }
   else {
       return ( 
           "Loading..."
       )
   }
}

export default Portfolio