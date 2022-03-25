import {getStudents} from '../../utils/apiCalls'
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Admin() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [studentList, setStudentList] = useState([]);

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

    if(isLoaded) {
        return (
            <div className='container'>
                {studentList.map((student) => {
                    return(
                        <Col>
                            <button>
                                {student.attributes.name}
                            </button>
                        </Col>
                    )
                })}
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