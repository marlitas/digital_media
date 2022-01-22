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
            />
        );
    });

    return (
        <div>
            {studentCards}
            <Outlet />
        </div>
    )
}

export default portfolios
