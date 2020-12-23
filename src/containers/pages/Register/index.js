import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component{
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

    handleRegisterSubmit = async () => {
        // console.log('email : ', this.state.email);
        // console.log('pass : ', this.state.password);
        const {email, password} = this.state;
        const res = await this.props.registerUserAPI({email,password}).catch(err => err);
        if (res) {
            this.setState({
                email: '',
                password: ''
            })
        }
    }

    render (){
        return(
            <div>
                <div>
                <p>Register page</p>
                <input placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerUserAPI: (data) => dispatch(registerUserAPI(data))
})
export default connect(reduxState, reduxDispatch)(Register);