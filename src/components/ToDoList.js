import React, {Component} from 'react';
import axios from 'axios';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todoList: [],
            newItem:'',
            searchItem:'',
            confirmedSearchItem:'',
            listBuffer: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
             .then(res => {
                 this.setState({todoList: res.data})
             });
    }

    addItem = () =>{
        let tempList = [...this.state.todoList];
        tempList.push(this.state.newItem);
        this.setState({
            todoList: tempList,
            newItem: ''
        });
    }
    setItem = (e) => {
        this.setState({
            newItem: e.target.value
        });
    }

    setSearchItem = (e) => {
        this.setState({
            searchItem: e.target.value
        });
    }

    setConfirmedSearchItem = () => {
        this.setState({
            confirmedSearchItem: this.state.searchItem
        });
    }

    setToDoList = () => {
        let tempList = [...this.state.listBuffer];
        this.setState({
            todoList: tempList
        });
    }

    removeItem = (e) => {
        let tempList = [...this.state.todoList];
        tempList.splice(e.target.value,1);
        this.setState(prevState => {
            return{
                listBuffer: prevState.todoList,
                todoList: tempList
            }
        });
    }
    removeAll = () => {
        this.setState(prevState => {
            return{
                listBuffer: prevState.todoList,
                todoList: []
            }
        });
    }
    
    render()
    {
        return(
        <div>
            <div>
            <label>Item <input type="text" value={this.state.newItem} onChange={(e) => {this.setItem(e)}} placeholder="new item"/></label>
            <input type="button" value="ADD" onClick={() => {this.addItem()}} />
            </div>
            <div>
            <input type="text" placeholder="item name" value={this.state.searchItem} onChange={(e) => {this.setSearchItem(e)}}/>
            <input type="button" value="SEARCH" onClick={()=>{this.setConfirmedSearchItem()}}/>
            </div>
            <div>
            <input type="button" value="REMOVE ALL" onClick={()=>{this.removeAll()}}/>
            <input type="button" value="UNDO" onClick={()=>{this.setToDoList()}}/>
            </div>
            <div>
                <ul>
                {this.state.todoList.map((item, index)=>{
                    if(this.state.confirmedSearchItem.length===0 || item.startsWith(this.state.confirmedSearchItem))
                    {
                        return <li value={index} onClick={(e)=>{this.removeItem(e)}}>{index+1}. {item.title}</li>
                    }
                    return null;
                })}
                </ul>
            </div>
        </div>
        );
    }
}
export default ToDoList;