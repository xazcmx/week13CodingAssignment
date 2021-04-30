import React from "react";
/* This is the login component, it contains a form with a login and password fields,
and a button.
*/
export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="container row col-sm border d-flex w-25 mt-5 justify-content-center align-content-center login" id="login">
                <h3 className="col-sm d-flex w-25 justify-content-center align-content-center">Login</h3>
                <form className="container justify-content-center">
                    <div className="form-group">
                        <label form="username" className="w-auto container col-sm justify-content-center align-content-center">Username</label>
                        <input type="text" className="form-text container col-sm justify-content-center align-content-center" id="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <label form="password" className="w-auto container col-sm justify-content-center align-content-center">Password</label>
                        <input type="password" className="form-text container col-sm justify-content-center align-content-center" id="password" placeholder="Password"></input>
                    </div>
                    <button type="button" className="btn btn-primary col-sm container w-25 justify-content-center align-content-center">Submit</button>
                </form>
            </div>
            </div>
            </div>
        );
    }
}