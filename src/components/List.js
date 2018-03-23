import React from 'react';
class List extends React.Component {
    render () {
        return [
            <li key="a">a</li>,
            <li key="b">b</li>,
            <li key="c">c</li>
        ]
    }
}
export default List;