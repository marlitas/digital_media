import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolios.css';

function portfolios() {

    const getStudents = [
        {   id: 1,
            attributes: {
                name: 'Sparky',
                avatar_url: 'https://picsum.photos/200'
            }
            
        },
        {   id: 2,
            attributes: {
                name: 'Marla',
                avatar_url: 'https://picsum.photos/200'
            }
        },
        {
            id: 3,
            attributes: {
                name: 'Evan',
                avatar_url: 'https://picsum.photos/200'
            }
        }
    ]

    const studentCards = getStudents.map((student) => {
        return (
            <Col>
                <Student
                name={student.attributes.name}
                avatar= {student.attributes.avatar_url}
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
