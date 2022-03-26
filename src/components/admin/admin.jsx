import {getStudents} from '../../utils/apiCalls'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Update from '../update/update'
import { useEffect, useState } from 'react';

function Admin() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [studentList, setStudentList] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [name, setName] = useState()

    const students = () => {
        getStudents()
            .then((data) => {
                setIsLoaded(true);
                setStudentList(data['data'])
            })
    };

    useEffect( () => {
        students()
    }, [])

    const handleClick = (event, name) => {
        setShowEdit(true)
        setName(name)
        event.preventDefault();
    };

    if(isLoaded) {
        return (
            <div className='container'>
                <Row xs={2} md={3} lg={4}>
                    {studentList.map((student) => {
                        return(
                            <Col>
                                <button onClick={(event) => handleClick(event, student.attributes.name)}>
                                    Edit {student.attributes.name}
                                </button>
                            </Col>
                        )
                    })}
                </Row>
                {showEdit &&
                    <div className='container'>
                    <Update name={name}/>
                </div>
                }
            </div>
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

export default Admin