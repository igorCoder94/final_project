import React from 'react';
import barberIcon from '../../img/barber.png';
import {
    Link
} from "react-router-dom";
import {logoffAction} from "../../actions";
import {connect} from 'react-redux';

class Header extends React.Component {

    toggleLoginState(){
        this.props.logoffDispatch();
        localStorage.removeItem('tokenId');
        localStorage.removeItem('name');
    }

    render(){
        return(
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Домашняя страница</Link>
                        </li>
                        <li>
                            <Link to="/services">Список услуг</Link>
                        </li>
                        <li>
                            {!this.props.loginState.logged ? <Link to="/registration">Вход/Регистрация</Link> : null}
                        </li>
                        <li>
                            {this.props.loginState.logged ? <Link to="/account" id='link-account'>Личный кабинет</Link> : null}
                        </li>
                        <li>
                            {this.props.loginState.logged ? <Link to="/" onClick={this.toggleLoginState.bind(this)}>Выход</Link> : null}
                        </li>

                    </ul>
                </nav>
                <img className="barber-shop-logo" src={barberIcon} alt="barber-icon"/>
                <div id='circle'>
                    <div id='circle-text'>
                        <Link to="/services">Онлайн запись</Link>
                    </div>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoffDispatch: () => dispatch(logoffAction())
    }
};

const mapStateToProps = state => ({
   loginState: state.loginReducer
});

export default connect(mapStateToProps,mapDispatchToProps)(Header)