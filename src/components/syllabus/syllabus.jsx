import './syllabus.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function syllabus() {
  return (
    <>
      <div className='container'>
        <h2 className='subheading'>Syllabus</h2>
        <table className='class-info'>
          <tr>
            <th>Instructor</th>
            <th>Class Time</th>
            <th>Class Location</th>
          </tr>
          <tr>
            <td>Marla A. Schulz</td>
            <td>T/TR 12:30 - 2:00pm</td>
            <td>HMN</td>
          </tr>
          <tr>
            <th>Office Location</th>
            <th>Office Hours</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>THTR C331</td>
            <td>Tuesdays 11:15am - 12:15pm</td>
            <td>marla.schulz@colorado.edu</td>
          </tr>
        </table>
      </div>
      
      <div className='container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Class Goals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Students will explore the process, mediums, and applications of digital media art. As a class we will investigate various digital media forms through creative projects and discussions. Students will be given tools to work with a variety of software and technology to create their projects, and will leave the class with a small portfolio of the work they created, as well as a deeper understanding of the role digital media art plays in our lives. 
              </p>
              <p>
                **Canvas will be used throughout the semester to communicate assignments, rubrics, and grades, as well as any course announcements. Links to additional learning material will be found on Canvas as well as the class website.** 
              </p>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Materials</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h3>Laptop</h3>
                <p>
                  Students are required to bring a laptop to every class. The majority of assignments will be done on a computer and failing to bring your computer to class can severely hinder your progress and experience. If you are unable to obtain a laptop for the semester, please reach out to me as soon as possible.
                </p>

                <h3>Hard Drive</h3>
                <p>
                  Although we will be working on our own computers throughout the semester, there may be points where we need to share files, or just plain want to have a back-up (computer meltdown anyone?). A portable hard drive of at least 16 GB is required. There is a resource sheet with links to various hard drives in canvas, as well as instructions on how to format your hard drive if necessary.
                </p>   

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Classroom Expectations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Respectful behavior is absolutely required. In creative settings we wish to hold a safe space for our work. This allows us to make choices without fear of reprimand or judgement from each other.</li>
                <li>Making mistakes is allowed and recommended. Bold creative choices come with risk, and risk sometimes doesn’t land in our favor. Experiment in this class, there’s no need to play it safe.</li>
                <li>Some material we encounter may be controversial, or mature subject matter. Part of the class is discussing, creating, or witnessing adult content (i.e. Adult language, violence, sexual behavior; topics of: race, culture, sexuality, gender, ideology and politics). If there is subject matter you cannot personally interact with, please communicate this ahead of time.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Attendance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Students are given two (2) “free” absences for the duration of the semester. Each additional absence will drop your grade by half a letter grade. Three (3) tardies of ten (10) minutes or more is equivalent to one absence. Please communicate with me immediately if there is a serious problem or emergency that prohibits you from remaining punctual or present in class. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>Grading</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Due to the instability caused by Covid-19 there is added flexibility to assignments and due dates: 
            <ul>
              <li>Each student’s three lowest grades (including zeros or incompletes) will be dropped for the semester. The Midterm and Final are excluded.</li>
              <li>Due dates extend to the end of each module. However, it is recommended that students practice time management and turn assignments in by the suggested completion date.</li>
              <li>Any assignments not turned in by the module due date will have a 20% grade decrease. Assignments turned in over a week late will only be accepted at the discretion of the instructor.</li>
            </ul>

            The midterm and final project grades cannot be dropped and must be submitted by the end of the semester to receive credit. These assignments will also receive a 20% grade decrease if turned in after their respective due date.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default syllabus

