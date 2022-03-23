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
                <div className='section'>
                    <Row>
                        <Col>
                            <h2 className='subheading'>{student.attributes.name}</h2>
                            <p>{student.attributes.about}</p>
                        </Col>
                        <Col s lg={8}>
                            <img className='self-portrait' src={student.attributes.avatar_url}></img>
                        </Col>
                    </Row>
                </div>
                <div className="section">
                    <Row>
                        <Col>
                            <h3>CodePen Web Design</h3>
                            <p>
                                Students created a 
                            </p>
                        </Col>
                        <Col>
                            <h3>Day In the Life</h3>
                        </Col>
                    </Row>
                </div>
                <div className="section">
                    <Row>
                        <Col s lg={8}>
                            <div className='video'>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hqCzgNw9Hqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Col>
                        <Col><h3>Midterm Video</h3></Col>
                    </Row>
                </div>
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