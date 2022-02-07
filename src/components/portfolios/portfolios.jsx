import { Outlet } from 'react-router-dom';
import Student from '../StudentCard/studentCard';
import { Container } from 'react-bootstrap';
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
            <Student
                name={student.name}
                avatar='https://picsum.photos/200'
            />
        );
    });

    return (
        <Container>
            <div class="card-container">
            {studentCards}
                <Outlet />
            </div>
        </Container>
        
    )
}

export default portfolios
