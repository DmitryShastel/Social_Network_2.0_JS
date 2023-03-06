import React from "react";
import s from './News.module.css'
import {addNewActionCreator, updateNewActionCreator} from "../../redux/news-reducer";


export const News = (props) => {
    let state = props.store.getState().news
    let newElements = state.news.map(n => <div>{n.new}</div>)
    let newElement = React.createRef()
    let newNewText = state.newNewText

    let addNew = () => {
        props.dispatch(addNewActionCreator())
    }

    let onChangeNew = () => {
        let text = newElement.current.value
        props.dispatch(updateNewActionCreator(text))
    }


    return (
        <div>
            <div className={s.news}>
                {newElements}
            </div>

            <div className={s.addNews}>
                <div>
                    <textarea
                        ref={newElement}
                        value={newNewText}
                        onChange={onChangeNew}
                    />
                </div>
                <div>
                    <button onClick={addNew}>Add New</button>
                </div>
            </div>
        </div>
    )
}