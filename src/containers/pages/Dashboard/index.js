import React, {Component} from 'react';
import {addDataToAPI} from '../../../config/redux/action';
import {connect} from 'react-redux';

class Dasboard extends Component{
    state = {
        title: '',
        date: ''
    }
    handleSaveCategories = () => {
        const {title} = this.state;
        const data = {
            title: title,
            date: new Date().getTime(),
            userId: this.props.userData.uid
        }
        this.props.saveCategories(data)
        console.log(data);
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    render (){
        const {title, date} = this.state;
        return(
            <div>
                <div>
                    <p>Dasboard page</p>
                    <input placeholder="Category" value={this.state.title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <button onClick={this.handleSaveCategories}>Save</button>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveCategories : (data) => dispatch(addDataToAPI(data))
})
export default connect(reduxState, reduxDispatch)(Dasboard);