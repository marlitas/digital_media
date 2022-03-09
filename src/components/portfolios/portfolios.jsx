import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolios.css';

function portfolios() {

    const getStudents = fetch('https://digital-media-api.herokuapp.com/api/v1/students')
                        .then(response => response.json())
                        .then(data => console.log(data))

    const studentCards = getStudents['data'].map((student) => {
        return (
            <Col>
                <Student
                name={student.attributes.name}
                avatar= {student.attributes.avatar_url}
                id={student.id}
                />
            </Col>
        );
    });

    return (
        <Container>
            <Row xs={2} md={3} lg={4}>
                {studentCards}
                    <Outlet />
            </Row>
        </Container>
        
    )
}

export default portfolios
