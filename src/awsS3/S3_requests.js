import { fileChecksum } from './checksum'

const createPresignedUrl = async(file, byte_size, checksum) => {
    let options = {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            file: {
                filename: file.name,
                byte_size: byte_size,
                checksum: checksum,
                content_type: 'image/png',
                metadata: {
                    'message': 'student avatar'
                }
            }
        })
    }

    let res = await fetch('https://digital-media-api.herokuapp.com/api/v1/presigned_url', options)
    if (res.status !== 200) return res
    return await res.json()
}

export const createStudent = async(studentInfo) => {
    const { avatar, name, enrolled, about, major } = studentInfo

    const checksum = await fileChecksum(avatar)
    const presignedFileParams = await createPresignedUrl(avatar, avatar.size, checksum)

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

    let res = await fetch('https://digital-media-api.herokuapp.com/api/v1/presigned_url', studentsPostOptions)
    if (res.status !== 200) return res
    return await res.json()
}