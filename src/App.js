import React, { Component } from 'react';
import './App.css';
import TodoItem from './Todoitem'



class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        isClicked : false,
        text: '',
        todos: []
      }
  }

 changeState = ()=>{
   this.setState({
     todos: [...this.state.todos,this.state.text],
     text:''
   })
 }
 onChange =(e)=>{
   this.setState({
     text: e.target.value
   })
   console.log(this.state.todos)
 }

 delete = (index)=>{
   let todoList = [...this.state.todos]
   todoList.splice(index,1)
   this.setState({
     todos : todoList
   })
 }
  
  render(){
    return (
      <div className="App">
        <input  value ={this.state.text} onChange = {this.onChange}/>
        <button onClick = {this.changeState}>list</button>
         <ul>
           {this.state.todos.map((todo,index)=>{
             return(
               <TodoItem key ={index} delete = {this.delete} item = {todo} ></TodoItem>
             )
           })}
         </ul>
      </div>
    );
  }
  
}

export default App;


