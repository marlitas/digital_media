import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container, Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import './portfolios.css';

function Portfolios() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [studentCards, setStudentCards] = useState([]);

    useEffect( () => {
        fetch('https://digital-media-api.herokuapp.com/api/v1/students')
                        .then(response => response.json())
                        .then(
                            (data) => { 
                                setIsLoaded(true);
                                setStudentCards(data['data'].map((student) => {
                                    return (
                                        <Col>
                                            <Student
                                            name={student.attributes.name}
                                            avatar= {student.attributes.avatar_url}
                                            id={student.id}
                                            />
                                        </Col>
                                    );
                                }));
                            })
    })
    
    return (
        <Container>
            <Row xs={2} md={3} lg={4}>
                {studentCards}
                    <Outlet />
            </Row>
        </Container>
    )
}

export default Portfolios
