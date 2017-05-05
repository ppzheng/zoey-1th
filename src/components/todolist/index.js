/**
 * Created by zoey on 2017/4/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './index.css'
import {actions} from '../../core/actions'
// const About = () => (
//   <div>
//     <h2>xxxxx</h2>
//   </div>
// );
//
// export default About

class TodoComponent extends React.Component {
  render() {
    let {todos, addTask ,removeTask} = this.props;
    return (
      <div>
        <div className="columns">
          <h1 className="title">todos</h1>
        </div>
        <div className="columns">
          <div className="todo-container column is-8 is-offset-2">
            <div className="new-todo">
              <input type="text" placeholder="What needs to be done?" onKeyPress={addTask}/>
            </div>
            <div className="todo-items">
              {todos.map((todo, index) => {
                return (
                  <div className="todo-item" key={index}>
                    <input type="checkbox" className="toggle"/>
                    <span className="todo-name">{todo}</span>
                    <button className="delete" onclick = {()=> removeTask(index)}/>
                  </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.default;
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: event => {
      if (event.key === 'Enter') {
        dispatch(actions.addTask(event));
        //新增后数据清空
        event.target.value = '';
      }
    },
    removeTask: index => dispatch(actions.removeTask(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
