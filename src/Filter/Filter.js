import React from 'react'
import './Filter.css'

const Filter = ({onRadio, onSelected, onCheck}) => {

    const onSelectedLocal = (e) => {

        onSelected(e.target.value)

    }

    const onRadioLocal = (e) => {
        onRadio(e.target.value)
    }

    const onCheckLocal = (e) => {

        onCheck(e.target.checked)
    }


    return (
        <div className="Filter">

            <h2>Фильтры</h2>

            <div>
                <input name="radio" type="radio" value="less" onClick={onRadioLocal} /> &lt;5000
                <input name="radio" type="radio" value="more" onClick={onRadioLocal} /> &gt;=5000
                <input name="radio" type="radio" value="" onClick={onRadioLocal} /> Все
            </div>

            <div>
                <select onChange={onSelectedLocal}>
                    <option value="0">Все категории</option>
                    <option value="1">Категория 1</option>
                    <option value="2">Категория 2</option>
                    <option value="3">Категория 3</option>
                    <option value="4">Категория 4</option>
                </select>
            </div>

            <div>
                <span>Только доступные</span>
                <input type="checkbox" onClick={onCheckLocal} />
            </div>

        </div>
    )
}

export default Filter