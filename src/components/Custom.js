import React from 'react';

export default class AutoFocus extends React.Component {
    componentDidMount () {
        this.textInput.focus();
    }
    render () {
        return (
            <Parent inputRef={el => this.textInput = el}/>
        )
    } 
}

function Parent (props) {
    return (
        <Custom inputRef={props.inputRef}/>
    )
}

function Custom (props) {
    return (
        <input 
        type="text"
        ref={props.inputRef} />
    )
}
// class Custom extends React.Component {
//     constructor (props) {
//         super(props);
//         this.focusInput = this.focusInput.bind(this);
//     }
//     focusInput () {
//         this.textInput.focus();
//     }
//     render () {
//         return (
//             <div>
//                 <input 
//                     type="text"
//                     ref={input => this.textInput = input} />
//                 <button onClick={()=>this.focusInput()}>focus</button>
//             </div>
//         )
//     }
// }
