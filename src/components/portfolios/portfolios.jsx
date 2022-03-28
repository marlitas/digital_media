import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {getStudents} from '../../utils/apiCalls';
import './portfolios.css';

function Portfolios() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [studentCards, setStudentCards] = useState([]);

    const students = () => {
        getStudents()
            .then((data) => {
                setIsLoaded(true);
                setStudentCards(data['data'].map((student) => {
                    return (
                        <Col>
                            <Student
                            name={student.attributes.name}
                            avatar= {student.attributes.avatar_url}
                            key={student.id}
                            />
                        </Col>
                    );
                }));
            })
    }

    useEffect( () => {
        students()
    }, [])

    if(isLoaded) {
        return (
            <Container>
                <Row xs={2} md={3} lg={4}>
                    {studentCards}
                        <Outlet />
                </Row>
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

export default Portfolios
