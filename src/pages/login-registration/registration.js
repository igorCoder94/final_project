import React from 'react';
import './login-registration.css';
//import validateName from '../../utils/validateName';
import { connect } from 'react-redux';
import {loginAction} from "../../actions";


class Registration extends React.Component{

    state = {
          nameError: false,
          passwordError: false,
          emailError: false,
          emailErrorMatch: false
    };

    validateName() {
        const regex = /^[a-zA-Zа-яА-Я]{3,}$/;
        return !regex.test(this.nameInput.value) ? this.setState({nameError: true}) : this.setState({nameError: false});

    }

    validateEmail(){
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regex.test(this.emailInput.value) ? this.setState({emailError: true}) : this.setState({emailError: false});
    }

    validatePassword(){
        if (this.pasInput.value.trim() === ''){
            this.setState({passwordError: true})
        } else {
            this.setState({passwordError: false})
        }

    }

    toReg(){

        console.log('e-mail:',this.emailInput.value);
        console.log('пароль:',this.pasInput.value);
        console.log('userName:', this.nameInput.value );

        const userData = {
            email: this.emailInput.value.toLowerCase(),
            password: this.pasInput.value,
            name: this.nameInput.value
        };

        if (this.state.emailError === false &&
            this.state.nameError === false && this.state.passwordError === false){
            fetch('http://localhost:3001/reg',
                {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                .then(res => res.json())
                .then(res =>{
                    console.log(res);
                    if (res.error === true) {
                        this.setState({emailErrorMatch: true});
                    }else {
                        this.setState({emailErrorMatch: false});
                        this.props.loginDispatch(res.name, res.id);
                        localStorage.setItem('tokenId', res.id);
                        localStorage.setItem('name', res.name);
                        window.location.href = "http://localhost:3000/"
                    }
                });
        }



        // const serialUser = JSON.stringify(this.props.registration);
        // localStorage.setItem('users',serialUser);
    }


    render() {

        return (
          <div>
            <form>
              <fieldset>
                  <legend>
                      <h2>Регистрация</h2>
                  </legend>
                  <div>Имя</div>
                  <input type="text" ref={(input) => this.nameInput = input} onBlur={this.validateName.bind(this)} autoFocus/>
                  {this.state.nameError ? <div className='errorText'>Поле должно содержать больше 3 символов и не содержать чисел</div> : null}
                  <div>Email</div>
                  <input type="email" ref={(input) => this.emailInput = input} onBlur={this.validateEmail.bind(this)}/>
                  {this.state.emailError ? <div className='errorText'>Email должен быть валидным</div> : null}
                  {this.state.emailErrorMatch ? <div className='errorText'>Этот email уже существует</div> : null}
                  <div>Пароль</div>
                  <input type="current-password" ref={(input) => this.pasInput = input} onBlur={this.validatePassword.bind(this)}/>
                  {this.state.passwordError ? <div className='errorText'>Поле пароля не должно быть пустым</div> : null}
                  <br/>
                  <br/>
                  <input type="button" value="Зарегистрироваться" onClick={this.toReg.bind(this)}/>
              </fieldset>
          </form>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginState: state.loginReducer,
    registration: state.registrationReducer
});

const mapDispatchToProps = dispatch => ({
    loginDispatch: (name,id) => dispatch(loginAction(name,id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Registration)