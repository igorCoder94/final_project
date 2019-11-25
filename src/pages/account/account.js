import React from 'react';
import './account.css';
import Profile from "./profile";
import {Service} from "./service";

export class Account extends React.Component{
    render(){
        return(
            <div>
                <main>
                    <section>
                        <h1 id='head-account'>Личный кабинет</h1>
                    </section>
                    <section>
                        <Profile />
                        <Service />
                        <br/>
                    </section>
                </main>
            </div>
        )
    }
}