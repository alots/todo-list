import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../action'

const onSubmit = (e, input, dispatch) => {
    e.preventDefault()
    if (!input.value.trim()) {
        return
    }
    dispatch(addTodo(input.value))
    input.value = ''
}

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <form  onSubmit={e => {onSubmit(e, input, dispatch)}}>

            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>

        </form>
    );
}
export default connect()(AddTodo);