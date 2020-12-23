import firebase, {database} from '../../../config/firebase';

export const actionUserName = () => (dispatch) => {
    // return (dispatch) => {
        setTimeout(() =>{
            return dispatch({type: 'CHANGE_USER', value: 'Apriila Satya'})
        }, 2000) // tunggu 2 detik
    // }
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {
            console.log('success : ', res);
            dispatch({type: 'CHANGE_LOADING', value: false})
            resolve(true)
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false})
            reject(false)
        })
    })
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(res => {
            console.log('success : ', res);
            const dataUser = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified,
                refreshToken: res.user.refreshToken
            }
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            dispatch({type: 'CHANGE_USER', value: dataUser})
            resolve(true)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false})
            reject(false)
        });
        // return (dispatch) => {
            setTimeout(() =>{
                return dispatch({type: 'CHANGE_LOADING', value: 'Apriila Satya'})
            }, 2000) // tunggu 2 detik
        // }
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    database.ref('categories/'+data.userId).push({
        title: data.title,
        date: data.date
    })
}