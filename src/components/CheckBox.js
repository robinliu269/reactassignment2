import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            color: this.props.color,
            checked: this.props.checked
        };
    }
    render()
    {
        const colorSquareStyle = {
            fill : this.state.color
        }
        return (
            <tr>
                <td>
                    <label>
                        <input type="radio" name={this.state.color} value={this.state.color} checked={this.state.checked} onChange={(e)=>this.props.setColor(e.target.value)}/>
                        {this.state.color}
                    </label>
                </td>
                {this.state.checked && <td>
                    <svg width="20" height="20">
                        <rect width="20" height="20" style={colorSquareStyle} />
                    </svg>
                </td>}
            </tr>
        );
    }
}
export default CheckBox;