import {h, render, Component} from 'ink'
import PoweredBy from './powered-by'

class Animoji extends Component {
    render() {
        return (
            <div>
                    Hello world
                <PoweredBy url="https://github.com/rjoydip"/>
            </div>
        )
    }
}

render(h(Animoji))
