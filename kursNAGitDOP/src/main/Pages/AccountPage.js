import React, { useEffect } from 'react';

function AccountPage({ username, linkInOrAccount, textInOrAccount, linkOutOrUp, welcome, orders }) {
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = "/account";
        }, 60000);

        return () => clearTimeout(redirectTimer);
    }, []);

    return (
        <div className="container-fluid my-4">
            <div className="row justify-content-center">
                <div className="col-11 col-xl-11">
                    <div style={{ backgroundColor: 'black', borderRadius: '25px', overflow: 'hidden' }}>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <img alt="beer?" className="d-block mx-5" width="75px" src="../static/icons/sushi.png" />
                            <a href="/index">
                                <span className="display-4" style={{ color: '#FFC0CB' }}>Roll Paradise</span>
                            </a>
                            <button className="navbar-toggler" style={{ border: '3px solid white', borderRadius: '20px' }} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" style={{ color: 'white' }}>
                                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link h4 px-4 mt-3" style={{ color: 'white', border: '3px solid #A9D0F8', borderRadius: '30px' }} href="/home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link h4 px-4 mt-3" style={{ color: 'white', border: '3px solid #A9D0F8', borderRadius: '30px' }} href="/reservation">Reserve</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle h4 px-4 mt-3" id="navbarDropdownMenuLink" style={{ color: '#A9D0F8' }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{username}</a>
                                        <div className="dropdown-menu dropdown-menu-right p-0" style={{ border: 'none', backgroundColor: '#000000' }} aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item mb-2" href={linkInOrAccount} style={{ background: 'linear-gradient(45deg, #5BC7F2, #FF7FA9)', color: 'white', borderRadius: '25px' }}>{textInOrAccount}</a>
                                            <a className="dropdown-item" href={linkOutOrUp} style={{ backgroundColor: 'grey', color: 'white', borderRadius: '25px' }}>LogOut</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <p className="h3 font-weight-normal mt-4 text-center" style={{ color: '#A9D0F8' }}>{welcome}</p>

                        <div className="row justify-content-center text-center">
                            <div className="col-11 col-xl-10">
                                <p className="h3 font-weight-normal my-4" style={{ color: 'white' }}>Ваш заказ</p>

                                <div style={{ border: '3px solid white', borderRadius: '25px', overflow: 'hidden' }} className="pb-2">
                                    <div className="h3 text-left" style={{ color: 'white' }}>
                                        {/* Order list */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="h3 font-weight-normal mb-5 mt-3 text-center" style={{ color: '#5700f7' }}>  </p>

                        <footer className="footer py-3" style={{ color: 'white', borderRadius: '25px' }}>
                            <div className="mx-5">
                                <div className="row justify-content-center text-center">
                                    <div className="col-6 col-xl-3">Мамонова Е.А.</div>
                                    <div className="col-6 col-xl-3">ИКБО-24-21</div>
                                    <div className="col-6 col-xl-3">
                                        <img alt="vk?" className="mx-auto" width="30px" src="../static/icons/vk.png" />
                                        <a className="text-light" target="_blank" rel="noopener noreferrer" href="https://vk.com/id198165768">vk.com/kate.mamonova</a>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <img alt="email?" className="mx-auto" width="30px" src="../static/icons/mail.png" />
                                        katevajs_mamonova@mail.ru
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <img alt="github?" className="mx-auto" width="30px" src="../static/icons/github.png" />
                                        <a className="text-light" target="_blank" rel="noopener noreferrer" href="https://github.com/ekaterina950">github.com/ekaterina950</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        <div className="copyrighttext">
                            <p>2024© Student MIREA. ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
