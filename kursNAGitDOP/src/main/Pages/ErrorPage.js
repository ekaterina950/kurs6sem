import React from 'react';

function ErrorPage() {
    return (
        <div className="container-fluid mt-4" style={{ backgroundColor: 'black' }}>
            <div className="row justify-content-center">
                <div className="col-10 col-xl-5">
                    <div style={{ backgroundColor: 'black', borderRadius: '25px' }}>
                        <img alt="beer?" src="../static/icons/sushi.png" className="mx-auto d-block" width="200px" />
                        <p className="text-center display-4 pb-3" style={{ color: '#FFC0CB' }}>Something went wrong :(</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
