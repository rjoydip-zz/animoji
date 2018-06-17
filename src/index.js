import React from 'react'
import {h, render, Component} from 'ink'
import PoweredBy from './powered-by'

class Animoji extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://github.com/rjoydip/animoji.git'
        }
    }

    render() {
        return (
            <div>
                <span>Hello world</span>
                <PoweredBy url={this.state.url}/>
            </div>
        )
    }
}

render(h(Animoji))
