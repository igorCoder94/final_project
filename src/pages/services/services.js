import React from 'react';
import './services.css';
import { connect } from 'react-redux';
import {addServicesAction} from '../../actions/index';

class Services extends React.Component{

    componentDidMount(){
        if (this.props.servicesReducer[0] === undefined) {
                fetch('http://localhost:3001/services')
                   .then(resp => resp.json())
                   .then(resp => {
                   this.props.addDataDispatch(resp)
               })
               .catch(error => console.log(error))
        }
    }

    signUp(){

    }


    render(){
        console.log(this.props.servicesReducer);
        return(
            <main>
                 <section>
                     <h1 id='head-services'>Услуги</h1>
                     <div className="services">

                             {this.props.servicesReducer.map((item,index) =>
                                 <div key={item.id}>
                                     <div>{item.type} <br/> Стоимость:{item.cost}₽</div>
                                     {this.props.loginState ? <div><button className='button-service' onClick={this.signUp.bind(this)}>ЗАПИСАТЬСЯ</button></div> : null}
                                     <br/>
                                 </div>
                             )}

                     </div>
                </section>
            </main>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addDataDispatch: (data) => dispatch(addServicesAction(data))
});

function mapStateToProps (state) {
    return {
        servicesReducer: state.servicesReducer,
        loginState: state.loginReducer.logged
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Services)