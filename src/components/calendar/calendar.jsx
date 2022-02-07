import './calendar.css'
import { Container } from 'react-bootstrap';

function calendar() {
  return (
    <Container>
      <h3>Due Dates</h3>
      <h5>Module 1: Intro to Digital Design</h5>
      <p className="due-date">February 11th 2022</p>
      <h5>Module 2: Film and TV</h5>
      <p className="due-date">March 11th 2022</p>
      <h5>Module 3: Web and Virtual Worlds</h5>
      <p className="due-date">April 1st 2022</p>
      <h5>Module 4: Galleries and Installations</h5>
      <p className="due-date">April 22nd 2022</p>
    </Container>
  )
}

export default calendar

