import './home.css';
import Syllabus from '../syllabus/syllabus';
import Calendar from '../calendar/calendar'

function home() {
  return (
    <>
      <Syllabus />
      <Calendar />
      <div className='container'>
        <a href="https://www.colorado.edu/academicaffairs/node/821/attachment" download>Syllabus Statements</a>
      </div>
    </>
  )
}

export default home
