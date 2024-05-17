import React from 'react';

function LoginPage() {
    const redirect = () => {
        window.location.href = "/registration";
    };

    return (
        <div className="container-fluid mt-4" style={{ backgroundColor: 'black' }}>
            <div className="row justify-content-center">
                <div className="col-10 col-xl-5">
                    <div style={{ backgroundColor: 'black', borderRadius: '25px' }}>
                        <img alt="beer?" className="mx-auto d-block" width="200px" src="../static/icons/sushi.png" />
                        <p className="text-center display-4" style={{ color: 'white' }}>Authorization</p>

                        <form action="#" method="post">

                            <div className="mx-5 px-5 form-group form-group-lg">
                                <label htmlFor="username" className="h4" style={{ color: 'white' }}>Username</label>
                                <input type="text" id="username" name="username" className="form-control input-lg"/>
                            </div>

                            <div className="mx-5 px-5">
                                <label htmlFor="password" className="h4" style={{ color: 'white' }}>Password</label>
                                <input type="password" id="password" name="password" className="form-control"/>
                            </div>

                            <div className="d-flex justify-content-center m-3 pb-3">
                                <button type="submit" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#5700f7', borderColor: 'white', borderRadius: '30px' }}>LogIn</button>
                                <button type="button" onClick={redirect} className="btn btn-secondary btn-lg pb-3 mx-4" style={{ backgroundColor: '#5700f7', borderColor: 'white', borderRadius: '30px' }}>Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
