import React from 'react';

import Task from '../task/task';
import './task-list.css';

class TaskList extends React.Component {

    render() {
        const todosItems = this.props.todos.map((item) => {
            const {id, name, status, isEditing, isCompleted} = item;
            return (
                <Task 
                    id={id} 
                    key={id} 
                    name={name} 
                    status={status} 
                    isEditing={isEditing} 
                    isCompleted={isCompleted}
                    onClick={this.props.onActive}
                    />
            );
        });
        
        return (
            <ul className='todo-list'>
                {todosItems}
            </ul>
        );
    }
};

export default TaskList;