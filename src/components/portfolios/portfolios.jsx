import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolios.css';

function portfolios() {

    const getStudents = [
        {
            name: 'Sparky'
        },
        {
            name: 'Marla'
        },
        {
            name: 'Evan'
        }
    ]

    const studentCards = getStudents.map((student) => {
        return (
            <Col>
                <Student
                name={student.name}
                avatar='https://picsum.photos/200'
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
