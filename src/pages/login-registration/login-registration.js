import React from 'react';
import Login from "./login";
import Registration from "./registration";

export class LoginAndRegistration extends React.Component {

    render(){
        return(
            <>
                <main>
                    <section>
                        <Login/>
                        <Registration/>
                        <br/>
                    </section>
                </main>
            </>
        )
    }
}

