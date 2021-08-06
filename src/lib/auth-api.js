

const AuthApi = (enteredEmail, enteredPassword, mode) => {


    let url;
    if (mode) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAshDZm_lKrA3fB0eYVPlYSrv7W3jc4l9M'
    }
    else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAshDZm_lKrA3fB0eYVPlYSrv7W3jc4l9M';
    }


    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        else {
            return res.json()
                .then(data => {
                    throw new Error(data.error.message);
                })
        }
    })
        .catch(err => {
            alert(err);
        })
}; 

export default AuthApi;