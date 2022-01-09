import './syllabus.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function syllabus() {
  return (
    <div>
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
            Info about class goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Materials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Info about materials.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Attendance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Info about attendance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Grading</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Info about grading.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default syllabus

