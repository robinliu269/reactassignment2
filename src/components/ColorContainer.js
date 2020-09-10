import React, {Component} from 'react';

function ColorContainer(WrappedComponent, color)
{
    console.log(color);
    return class extends Component{
        constructor(props)
        {
            super(props);
            this.state = {
                color : color,
                checked : this.props.selectedColor === color
            };
        }
        render()
        {
            return <WrappedComponent color={this.state.color} checked={this.state.checked} setColor = {this.props.setColor}/>;
        }
    }
}
export default ColorContainer;