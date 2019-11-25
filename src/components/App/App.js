import React from 'react';
import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";
import {Home} from '../../pages/home/home';
import {Account} from '../../pages/account/account';
import Services from '../../pages/services/services';
import {LoginAndRegistration} from "../../pages/login-registration/login-registration";
import Header from "../Header/header";
import {connect} from 'react-redux';
import {loginAction} from "../../actions";

let tokenId;
let name;
if (localStorage.getItem('tokenId') != null){
    tokenId = localStorage.getItem('tokenId');
    name = localStorage.getItem('name')
}

class App extends React.Component {
    render() {
        if (localStorage.getItem('tokenId') != null) {
            this.props.statusDispatch(name, tokenId);
        }

        return (
            <div className="App">
                <Header/>
                    <div>
                        <Switch>
                            <Route path="/" exact>
                                <Home/>
                            </Route>
                            <Route path="/account">
                                <Account/>
                            </Route>
                            <Route path="/services">
                                <Services/>
                            </Route>
                            <Route path="/registration">
                                <LoginAndRegistration/>
                            </Route>
                        </Switch>
                    </div>
                <footer>
                    Санкт-Петербург, Пушкинская ул., 12
                    Тел. +7 (812) 555-55-55 <br/>
                    OTD BARBERSHOP © 2019
                </footer>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        loginState: state.loginState
    }
}

function mapDispatchToProps(dispatch){
    return {
        statusDispatch: (name,id) => dispatch(loginAction(name,id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)