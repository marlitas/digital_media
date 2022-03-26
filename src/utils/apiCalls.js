
export const postData = (url, data) => {
    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        return res.json()
    })
}

export const getStudent = async(name) => {
    const response = await fetch(`https://digital-media-api.herokuapp.com/api/v1/students/${name}`);
    return await response.json()
};

export const getStudents = async() => {
    const response = await fetch('https://digital-media-api.herokuapp.com/api/v1/students');
    return await response.json()
}

export const updateStudent = async(url, data) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}