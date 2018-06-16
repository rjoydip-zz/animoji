import React from "react";
import styled from 'styled-components'
import { h, render, Component } from 'ink';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class HelloWorldComponent extends Component {
    render() {
        return (
            <div>
               Hello world
            </div>
        );
    }
}

render(h(HelloWorldComponent));