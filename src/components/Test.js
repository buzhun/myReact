// @flow
import React from 'react';
import Button from './Button';
import List from './List';
import Custom from './Custom';
import PropTypes from 'prop-types';

function Item (props) {
    return <li>{props.message}</li>;
}
function TodoList () {
    const nameList = ['sleep', 'eat', 'work'];
    return (
        <ul>
            {nameList.length > 0 && <span>helloworld{String(nameList.length > 0)}</span>}
            {nameList.map((item) => <Item message={item} key={item}></Item>)}
        </ul>
    )
}
function Repeat (props) {
    var num = props.num;
    var items = [];
    for (var i = 0; i < num; i++) {
        items.push(props.children(i))
    }
    return <div>{items}</div>;
}
function TenRepeat () {
    return (<Repeat num={10}>
        {(index)=> <div key={index}>this is {index + 1} item </div> }
    </Repeat>)
} 

class Count extends React.PureComponent {
    constructor () {
        super();
        this.state = {
            count: 1,
            list: ['a', 'b']
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        console.log(1)
        this.setState(prevState=> ({
            list: [...prevState.list, 'c']
        }));
        // var count = this.state.count + 1;
        // this.setState({
        //     count: count
        // });
    }
    render () {
        return (
            <div>
                <span>次数：{this.state.list}</span>
                <input type="button" onClick={this.handleClick} value="添加"/>
            </div>
        )
    }
}
export default function Test (props) {
    var btnProps = {
        kind: 'ddd',
        onClick: ()=>{console.log(1)}
    }
    var flag = true;
    function go() { console.debug(this); }
    go();
    return (
        <div>
            <p>{props.name}</p>
            <Button {...btnProps}>hello</Button>
            <List />
            <TodoList />
            {flag && <TenRepeat />}
            <Custom />
            <Count />
        </div>
    )
}

Test.propTypes = {
    name: PropTypes.string
}
