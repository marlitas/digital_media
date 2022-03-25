import {updateStudent, getStudent} from '../../utils/apiCalls'
import { useEffect, useState } from 'react';

function Update(name) {
    const [major, setMajor] = useState('');
    const [enrolled, setEnrolled] = useState(true);
    const [about, setAbout] = useState('');
    const [code, setCode] = useState('');
    const [video, setVideo] = useState('');
    const [student, setStudent] = useState('');

    const handleSubmit = event => {
        const url = `https://digital-media-api.herokuapp.com/api/v1/students/${student.id}`
        const data = {
            name: student.attributes.name,
            major: major,
            enrolled: enrolled,
            about: about,
            code: code,
            video: video
        }

        event.preventDefault();
        updateStudent(url, data)
    }

    const studentData = () => {
        getStudent(name)
            .then((data) => {
                setStudent(data.data)
                setMajor(data.data.attributes.major)
                setEnrolled(data.data.attributes.enrolled)
                setAbout(data.data.attributes.about)
                setCode(data.data.attributes.code)
                setVideo(data.data.attributes.video)
            })
    }

    useEffect(() => {
        studentData();
    }, [])

    return (
        <div className="container">
            <h2>Update {name}</h2>
            <form>
                <input 
                    type='text'
                    placeholder={major}
                    name='major'
                    value={major}
                    onChange={event => setMajor(event.target.value)}
                />
                <label>About:
                    <textarea 
                        type='text'
                        placeholder={about}
                        name='about'
                        value={about}
                        onChange={event => setAbout(event.target.value)}
                    />
                </label>
                
                <input 
                    type='checkbox'
                    checked={enrolled}
                    name='enrolled'
                    onChange={event => setEnrolled(!enrolled)}
                />
                <label>
                    Code:
                    <input 
                    type='text'
                    placeholder={code}
                    name='code'
                    value={code}
                    onChange={event => setCode(event.target.value)}
                    />
                </label>
                
                <label>Video:
                    <input 
                        type='text'
                        placeholder={video}
                        name='video'
                        value={video}
                        onChange={event => setVideo(event.target.value)}
                    />
                </label>
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Update