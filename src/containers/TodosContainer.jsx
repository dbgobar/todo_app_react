import React, {Component} from 'react'
import TodoModel from '../models/Todo.jsx'

class TodosContainer extends Component{
  constructor(){
    super()
    this.state={
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) =>{
      console.log(res);
      this.setState({
        todos: res.data,
        todo: ''
      })
    })

  }
  render(){
    return(
      <div className='todosComponent'>
        This is the app container
      </div>
    )
  }
}

export default TodosContainer
