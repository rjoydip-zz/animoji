import React from 'react'
import {h, render, Color, Component} from 'ink'

class PoweredBy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'N/A'
        }
    }

    render() {
        return (
            <div>
                Powered By: &nbsp;
                <Color green>{this.props.url || this.state.url}</Color>
            </div>
        )
    }
}

export default render(h(PoweredBy))
