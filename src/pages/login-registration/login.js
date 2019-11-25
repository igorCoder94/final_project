import React from 'react';
import './login-registration.css'
import { connect } from 'react-redux';
import {loginAction} from "../../actions";


class Login extends React.Component{

    state = {
        globalError: false
    };

    logIn() {
        const userData = {
            email: this.emailInput.value.toLowerCase(),
            password: this.pasInput.value
        };


        fetch('http://localhost:3001/login',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                if(res.error){
                   return this.setState({globalError: true})
                }
                this.props.loginDispatch(res.name, res.id);
                console.log(this.props.loginState);
                this.setState({globalError: false});
                localStorage.setItem('tokenId', res.id);
                localStorage.setItem('name', res.name);
                window.location.href = 'http://localhost:3000/';
            })
            .catch(err => {
                console.log(err.code)
            })
    }
    render() {

        //const { nameError, name } = this.state;

        return (
           <div> <form id='form-login'>
                <fieldset>
                    <legend>
                        <h2>Логин</h2>
                    </legend>
                    <div>Email</div>
                    <input type="email" ref = {(input) => this.emailInput = input}/>
                    <div className='errorText'></div>
                    <div>Пароль</div>
                    <input type="current-password"  ref = {(input) => this.pasInput = input}/><br/>
                    <div className='errorText'></div>
                    <div className='errorText'></div>
                    {this.state.globalError ? <div className='errorText'>Проверьте правильность данных и попробуйте ещё раз</div> : null}
                    <br/>
                    <input type="button" value="Войти" onClick={this.logIn.bind(this)}/>
                </fieldset>
             </form>
           </div>
        );
    }
}




const mapStateToProps = (state) => {
   return {
       loginState: state.loginReducer
   }
};

const mapDispatchToProps = dispatch => {
    return {
        loginDispatch: (name,id) => dispatch(loginAction(name,id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
