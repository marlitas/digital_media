import { Outlet } from 'react-router-dom'
import Student from '../StudentCard/studentCard';
import './portfolios.css'

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
        <div class="container">
            <div class="card-container">
            {studentCards}
                <Outlet />
            </div>
        </div>
        
    )
}

export default portfolios
