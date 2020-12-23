import React, {Component} from 'react';
import { connect } from 'react-redux'
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component{
    state = {
        email: '',
        password: '',
        isLoading: false
    }

    handleChangeText = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async () => {
        // console.log('email : ', this.state.email);
        // console.log('pass : ', this.state.password);
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email,password}).catch(err => err);
        if(res){
            console.log('login success', res);
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        }else{
            console.log('login failed');
        }
    }

    render (){
        return(
            <div>
                <div>
                <p>Login page</p>
                <input placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})
 
export default connect(reduxState, reduxDispatch)(Login);