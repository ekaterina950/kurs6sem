import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservationPage() {
    const [order, setOrder] = useState({
        fullname: '',
        people: '',
        contact: '',
        data: '',
        time: '',
        delivery: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prevOrder => ({ ...prevOrder, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and submit the form
        // Set message to simulate form submission
        setMessage('Order confirmed!');
    };

    return (
        <div className="container-fluid my-4" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-11 col-xl-11">
                    <div style={{ backgroundColor: 'black', borderRadius: '25px', overflow: 'hidden' }}>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <img alt="sushi" className="d-block mx-5" width="75px" src="../static/icons/sushi.png" />
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
                                        <a className="nav-link dropdown-toggle h4 px-4 mt-3" id="navbarDropdownMenuLink" style={{ color: '#A9D0F8' }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Username</a>
                                        <div className="dropdown-menu dropdown-menu-right p-0" style={{ border: 'none', backgroundColor: '#000000' }} aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item mb-2" href="/account" style={{ background: 'linear-gradient(45deg,#5BC7F2, #FF7FA9)', color: 'white', borderRadius: '25px' }}>Account</a>
                                            <a className="dropdown-item" href="/logout" style={{ backgroundColor: 'grey', color: 'white', borderRadius: '25px' }}>LogOut</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="row justify-content-center text-center">
                            <div className="col-10 col-xl-5">
                                <div style={{ backgroundColor: 'black', borderRadius: '25px' }}>
                                    <img alt="sushi" className="mx-auto d-block" width="200px" src="../static/icons/sushi2.png" />
                                    <p className="text-center display-4" style={{ color: 'white' }}>Order</p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mx-5 px-5 form-group form-group-lg">
                                            <label htmlFor="fullname" className="h4" style={{ color: 'white' }}>Your fullname?</label>
                                            <input
                                                type="text"
                                                id="fullname"
                                                name="fullname"
                                                className="form-control input-lg"
                                                value={order.fullname}
                                                onChange={handleChange}
                                            />
                                            {errors.fullname && <label style={{ color: 'red' }}>{errors.fullname}</label>}
                                        </div>

                                        <div className="mx-5 px-5 form-group form-group-lg">
                                            <label htmlFor="people" className="h4" style={{ color: 'white' }}>How many people?</label>
                                            <input
                                                type="text"
                                                id="people"
                                                name="people"
                                                className="form-control"
                                                value={order.people}
                                                onChange={handleChange}
                                            />
                                            {errors.people && <label style={{ color: 'red' }}>{errors.people}</label>}
                                        </div>

                                        <div className="mx-5 px-5 form-group form-group-lg">
                                            <label htmlFor="contact" className="h4" style={{ color: 'white' }}>Your phone:</label>
                                            <input
                                                type="text"
                                                id="contact"
                                                name="contact"
                                                className="form-control"
                                                value={order.contact}
                                                onChange={handleChange}
                                            />
                                            {errors.contact && <label style={{ color: 'red' }}>{errors.contact}</label>}
                                        </div>

                                        <div className="mx-5 px-5 form-group form-group-lg">
                                            <label htmlFor="data" className="h4" style={{ color: 'white' }}>Date:</label>
                                            <input
                                                type="text"
                                                id="data"
                                                name="data"
                                                className="form-control"
                                                placeholder="DD.MM.YYYY"
                                                value={order.data}
                                                onChange={handleChange}
                                            />
                                            {errors.data && <label style={{ color: 'red' }}>{errors.data}</label>}
                                            <select name="time" className="form-control" value={order.time} onChange={handleChange}>
                                                <option value="hour-select">Select Hour</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="13:00">13:00</option>
                                                <option value="13:30">13:30</option>
                                                <option value="14:00">14:00</option>
                                                <option value="14:30">14:30</option>
                                                <option value="15:00">15:00</option>
                                                <option value="15:30">15:30</option>
                                                <option value="16:00">16:00</option>
                                                <option value="16:30">16:30</option>
                                                <option value="17:00">17:00</option>
                                                <option value="17:30">17:30</option>
                                                <option value="18:00">18:00</option>
                                                <option value="18:30">18:30</option>
                                                <option value="19:00">19:00</option>
                                                <option value="19:30">19:30</option>
                                                <option value="20:00">20:00</option>
                                                <option value="20:30">20:30</option>
                                                <option value="21:00">21:00</option>
                                                <option value="21:30">21:30</option>
                                                <option value="22:00">22:00</option>
                                                <option value="22:30">22:30</option>
                                                <option value="23:00">23:00</option>
                                                <option value="23:30">23:30</option>
                                            </select>
                                        </div>

                                        <div className="mx-5 px-5 form-group form-group-lg">
                                            <label htmlFor="delivery" className="h4" style={{ color: 'white' }}>Delivery:</label>
                                            <select name="delivery" className="form-control" value={order.delivery} onChange={handleChange}>
                                                <option value="hour-select">Select Delivery</option>
                                                <option value="to home">to home</option>
                                                <option value="inside">inside</option>
                                            </select>
                                        </div>

                                        <div className="d-flex justify-content-center m-3">
                                            <button type="submit" className="btn btn-secondary btn-lg" style={{ color: 'black', backgroundColor: 'white', borderColor: 'white', borderRadius: '30px' }}>Confirm!</button>
                                        </div>
                                    </form>

                                    <p className="text-center h1 fw-bold m-3 pb-3" style={{ color: 'white' }}>{message}</p>
                                </div>
                            </div>
                        </div>

                        <footer className="footer py-3" style={{ color: 'white', borderRadius: '25px' }}>
                            <div className="mx-5">
                                <div className="row justify-content-center text-center">
                                    <div className="col">Contacts! Just in case...</div>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <div className="col-6 col-xl-3">Мамонова Е.А.</div>
                                    <div className="col-6 col-xl-3">ИКБО-24-21</div>
                                    <div className="col-6 col-xl-3">
                                        <img alt="vk" className="mx-auto" width="30px" src="../static/icons/vk.png" />
                                        <a className="text-light" target="_blank" rel="noopener noreferrer" href="https://vk.com/id198165768">vk.com/kate.mamonova</a>
                                    </div>

                                    <div className="col-6 col-xl-3">
                                        <img alt="mail" className="mx-auto" width="30px" src="../static/icons/mail.png" />
                                        katevajs_mamonova@mail.ru
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <img alt="github" className="mx-auto" width="30px" src="../static/icons/github.png" />
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

export default ReservationPage;
