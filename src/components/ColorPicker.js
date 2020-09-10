import React, {Component} from 'react';
import ColorContainer from './ColorContainer';
import CheckBox from './CheckBox';

class ColorPicker extends Component {
    constructor(props)
    {
        super(props);
        this.state = {selectedColor: null}
    }

    setColor= (color) =>
    {
        this.setState({
            selectedColor: color
        });
    }

    render()
    {
        const colorList=["red","blue","yellow","pink"];
        return(
            colorList.map((color)=> {const NewCheckBox = ColorContainer(CheckBox,color);
                return <NewCheckBox key={color} selectedColor={this.state.selectedColor} setColor={this.setColor}/>;
              })
        );   

    }

}
export default ColorPicker;