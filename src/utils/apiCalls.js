
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