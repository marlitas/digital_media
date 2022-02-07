import './home.css';
import Syllabus from '../syllabus/syllabus';
import Calendar from '../calendar/calendar';
import { Container } from 'react-bootstrap';

function home() {
  return (
    <>
      <Syllabus />
      <Calendar />
      <Container>
        <a href="https://www.colorado.edu/academicaffairs/node/821/attachment" download>Syllabus Statements</a>
      </Container>
    </>
  )
}

export default home
