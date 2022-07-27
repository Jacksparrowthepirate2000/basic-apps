import React, { useState } from 'react'
//import { useDispatch } from 'react-redux/es/hooks/useDispatch';
// import addTodo from '../Redux/Todo/todoAction';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useDispatch } from 'react-redux/es/exports';
// import { deleteTodo } from '../Reduxs/Todo/todoAction';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { addTodo , deleteTodo } from '../Redux/Todo/todoAction';



export default function ToDoList() {

    const dispatch = useDispatch();
    const todosArray = useSelector((state) => { return state.changeTodoListReducer })

    const [initialValue, setInitialValue] = useState("");

    function kaka() {
        dispatch(addTodo(initialValue));
        setInitialValue('')
    }



    return (
        <div className='mx-auto p-3'>
        <div className='bg-dark text-light bg-gradient mx-auto mt-3 border border-dark border-3 p-3' style={{ maxWidth: "500px" }}>
            <div className="text-decoration-underline fs-1 mb-3 text-center">To-Do List</div>

            <div className="input-group mb-3">
                <input value={initialValue} onChange={function (event) { setInitialValue(event.target.value) }} type="text" className="form-control" placeholder="Add A New Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={kaka} className="btn btn-primary px-3" type="button" id="button-addon2">Add</button>
            </div>

            <div>
                {todosArray.map(function (elem) {
                    return (
                        <div className="my-2 input-group" key={elem}>
                            <input disabled value={elem} type="text" className="ps-3 form-control" aria-label="Text input with checkbox" />
                            {/* <button onClick={function () { dispatch(deleteTodo(elem)) }} className="btn btn-danger" type="button" id="button-addon2">&#9587;</button> */}
                            <button onClick={function(){dispatch(deleteTodo(elem))}} className="btn btn-danger px-3" type="button" id="button-addon2">X</button>
                        </div>
                    )
                })}
            </div>

        </div>
        </div>
    )
}
