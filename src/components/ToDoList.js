import React, {Component} from 'react'

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todolist: ["a","b","c"],
            newItem:'',
            searchItem:'',
            confirmedSearchItem:''
        }
    }

    addItem = () =>{
        let tempList = [...this.state.todolist];
        tempList.push(this.state.newItem);
        this.setState({
            todolist: tempList,
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

    removeItem = (e) => {
        let tempList = [...this.state.todolist];
        tempList.splice(e.target.value,1);
        this.setState({
            todolist: tempList
        });
    }
    removeAll = () => {
        this.setState({
            todolist: []
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
            </div>
            <div>
                <ul>
                {this.state.todolist.map((item, index)=>{
                    if(this.state.confirmedSearchItem.length==0 || item.startsWith(this.state.confirmedSearchItem))
                    {
                        return <li value={index} onClick={(e)=>{this.removeItem(e)}}>{index+1}. {item}</li>
                    }
                })}
                </ul>
            </div>
        </div>
        );
    }
}
export default ToDoList;