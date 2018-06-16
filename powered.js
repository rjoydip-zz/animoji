import { h, render, Component, Color } from 'ink';

class PoweredBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://github.com/rjoydip'
        };
    }

    render() {
        return h(
            'div',
            {},
            [
                'Powered by ',
                h(
                    Color,
                    { green: true },
                    `${this.state.url}`
                ),
                ' success.'
            ]
        );
    }

    componentDidMount() { }

    componentWillUnmount() { }
};

render(h(PoweredBy));