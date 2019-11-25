import React from 'react';
import './home.css'
import barberOne from '../../img/team_1.jpg';
import barberTwo from '../../img/team_2.jpg';
import barberThree from '../../img/team_3.png';
import barberFour from '../../img/team_4.png';
import clipart from '../../img/scissors.png';
import {PhotoList} from "./photosList";

export class Home extends React.Component{

    render(){
        return(
            <div>
                <main>
                    <section className='section-discount'>
                      <div className='text-block'>
                          <h1>
                              Добро пожаловать в  <br/> GENTLE SHAVING
                          </h1>
                      </div>
                    </section>
                    <section className='section-info'>
                        <div>
                            <img id='clipart' src={clipart} alt=""/>
                        </div>
                        <div className='text-block'>Первый мужской барбершоп в Санкт-Петербурге, объединивший классические мужские стрижки, настоящих мастеров своего дела и формат, свободный от штампов подавляющего большинства парикмахерских. Придя к нам, вы забудете чувство неуверенности за результат — мы не просто стрижём, а создаём причёски, которые становятся неотъемлемыми оставляющими имиджа. В работе мы используем только качественные продукты для ухода за волосами, проверенные многолетним опытом. А ещё покоряем дружеской атмосферой и не скупимся на профессиональный совет.</div>
                    </section>
                    <section className='section-team'>
                        <h1>Наша команда</h1>
                       <div className='team-photos-container flex-column'>
                                <PhotoList
                                    firstBarberName="Александр Крылов" barberOne={barberOne}
                                    secondBarberName="Олег Богунов" barberTwo={barberTwo}
                                />
                                <PhotoList
                                    firstBarberName="Андрей Кривохарченко" barberOne={barberThree}
                                    secondBarberName="Владимир Суслов" barberTwo={barberFour}
                                />
                       </div>
                    </section>
                </main>
            </div>
        )
    }
}

