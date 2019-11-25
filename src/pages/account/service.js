import React from 'react';

export const Service = () => {
    return(
        <form>
            <fieldset className='field-account'>
                <legend>
                    <h2>Выбранные услуги</h2>
                </legend>
                <div>Услуга</div>
                <input type="text"/>
                <div>Дата и время</div>
                <input type="date"/><br/>
                <button>Отписаться</button>
            </fieldset>
        </form>
    )
}