import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>Please Login!</h1>
                <form onSubmit={this.props.getUser} >
                    <input type='text' name='username' placeholder='username' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// const Login = (props) => {
//     return(
//         <div>
//             <h1>Please Login!</h1>
//             <form onSubmit={props.getUser} >
//                 <input type='text' name='username' placeholder='username' />
//                 {/* <input type='password' name='password' placeholder='password' /> */}
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }

export default Login;