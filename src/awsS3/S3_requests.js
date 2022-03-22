import { postData } from '../utils/apiCalls';
import { fileChecksum, md5FromFile } from './checksum';

//step 1
const getPresignedUrl = async (file) => {
    await md5FromFile(file)
    const sum = await fileChecksum(file)

    const body = {
        file: {
            filename: file.name,
            byte_size: file.size,
            checksum: sum,
            content_type: file.type,
            metadata: {
                'message': 'student avatar png'
            }
        }
    }

    const res = await fetch('https://digital-media-api.herokuapp.com/api/v1/presigned_url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)})
    return await res.json()
}

//step 2
export const createStudent = async(studentInfo) => {
    const { avatar, name, enrolled, about, major } = studentInfo
    const presignedFileParams = await getPresignedUrl(avatar)
    const s3PutOptions = {
        method: 'PUT',
        headers: presignedFileParams.direct_upload.headers,
        body: avatar
    }

    let awsRes = await fetch(presignedFileParams.direct_upload.url, s3PutOptions)
    if (awsRes.status !== 200) return awsRes

    let studentsPostOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            avatar: presignedFileParams.blob_signed_id,
            major: major,
            enrolled: enrolled,
            about: about
        })
    }

    let res = await fetch('https://digital-media-api.herokuapp.com/api/v1/students', studentsPostOptions)
    if (res.status !== 200) return res
    return await res.json()
}