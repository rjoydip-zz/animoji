'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ink = require('ink');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _styledComponents2.default.button.withConfig({
    displayName: '__Button'
})(['display:inline-block;color:palevioletred;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;']);

class HelloWorldComponent extends _ink.Component {
    render() {
        return (0, _ink.h)(
            'div',
            null,
            'Hello world'
        );
    }
}

(0, _ink.render)((0, _ink.h)(HelloWorldComponent));
