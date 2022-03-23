import { Container, Row, Col, Spinner } from 'react-bootstrap';
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
                            <div className="column-wrapper">
                                {/* <div className='video'>
                                    <iframe height="300" scrolling="no" title="DA-PLUG" src="https://codepen.io/Da-Genius/embed/LYeYyVJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
                                </div> */}
                                <h3>CodePen Web Design</h3>
                                <p className="assignment-info">
                                    Coming Soon... A one page web design using basic html and css to explore graphic design theories as applied to the web.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="column-wrapper">
                                <h3>3D Sculpture</h3>
                                <p className="assignment-info">
                                    Coming Soon... An introduction to blender, playing with 3D rendering, texture, and more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="section">
                    <Row>
                        <Col s lg={8}>
                            <div className='column-wrapper'>
                                <div className='video'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hqCzgNw9Hqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='column-wrapper'>
                                <h3>Midterm Video</h3>
                                <p className='assignment-info'>
                                    An exploration of film and TV, through a project based short form video content.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
   else {
        return (
            <div className='container'>
                <div className='section'>
                        <Spinner animation='border' variant='warning' role='status'>
                            <span className="visually-hidden">"Loading..."</span>
                        </Spinner>
                </div>
            </div>
        ) 
   }
}

export default Portfolio