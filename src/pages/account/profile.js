import React from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component{

    state = {
       usersData: [],
       userData: [],
       buttonChange: true,
       buttonSave: false

    };

    componentDidMount() {
        fetch('http://localhost:3001/usersInfo')
            .then(resp => resp.json())
            .then(data => {
                this.setState({usersData: data});
                return this.state.usersData
            })
            .then(res => {
                let currentUser = {};
                res.map(item => {
                    if (item.id ===  this.props.stateInfo.id){
                        currentUser = Object.assign({},item);
                        this.setState({userData: currentUser});
                        console.log(this.state.userData)
                    }
                })
            });

    }

    onChangeButton(){
        this.setState({buttonSave: true, buttonChange: false})
    }

    onSaveButton(){
        this.setState({buttonSave: false, buttonChange: true});
        let updatedData = {
            id: this.props.stateInfo.id,
            name: this.nameInput.value,
            email: this.emailInput.value,
            password: this.pasInput.value
        };
        console.log(JSON.stringify(updatedData));

        fetch('http://localhost:3001/updateProfileInfo',
            {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err =>{
                console.log(err);
            })
    }

    render() {
        let change = this.state.buttonChange;
        let save = this.state.buttonSave;

        return (
            <div>
                <form>
                    <fieldset className='field-account'>
                        <legend>
                            <h2>Профиль</h2>
                        </legend>
                        <div>Имя</div>
                        <input type="text" defaultValue={this.state.userData.name} readOnly={change}
                        ref={input => this.nameInput = input}
                        /><br/>
                        <div>Email</div>
                        <input type="text" defaultValue={this.state.userData.email} readOnly={change}
                        ref={input => this.emailInput = input}
                        /><br/>
                        <div>Пароль</div>
                        <input type="text" defaultValue={this.state.userData.password} readOnly={change}
                               ref={input => this.pasInput = input}
                        /><br/>
                        {change ? <button onClick={this.onChangeButton.bind(this)}>Изменить</button> : null}
                        <br/>
                        {save ? <button onClick={this.onSaveButton.bind(this)}>Сохранить изменения</button> : null}
                    </fieldset>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        regState: state.registrationReducer,
        stateInfo: state.loginReducer
    }
};

export default connect(mapStateToProps)(Profile);
