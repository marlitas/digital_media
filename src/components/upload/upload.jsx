import { createStudent } from '../../awsS3/S3_requests';
import { useState, createRef } from 'react';

function Upload() {

    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [avatar, setAvatar] = useState();
    const [enrolled, setEnrolled] = useState(true);
    const [about, setAbout] = useState('');
    const fileInput = createRef();

    const handleSubmit = event => {
        const student = {
            name: name,
            major: major,
            avatar: avatar,
            enrolled: enrolled,
            about: about
        }

        console.log(student)
        event.preventDefault();
        createStudent(student)
    }

    return (
        <div className='container'>
            <h2>Upload Students</h2>
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Major'
                    name='major'
                    value={major}
                    onChange={event => setMajor(event.target.value)}
                />
                <input 
                    type='text'
                    placeholder='About'
                    name='about'
                    value={about}
                    onChange={event => setAbout(event.target.value)}
                />
                <input 
                    type='checkbox'
                    checked={enrolled}
                    name='enrolled'
                    onChange={event => setEnrolled(!enrolled)}
                />
                <label>
                    Upload avatar:
                    <input type='file' ref={fileInput} />
                </label>

                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )  
}

export default Upload