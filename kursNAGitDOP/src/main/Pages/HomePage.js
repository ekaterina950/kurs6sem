import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ username, linkInOrAccount, textInOrAccount, linkOutOrUp, welcome }) {
    return (
        <div className="container-fluid my-4">
            <div className="row justify-content-center">
                <div className="col-11 col-xl-11">
                    <div className="mr-5" style={{ color: '#A9D0F8', position: 'absolute', right: 0 }}>You have successfully logged out.</div>

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
                                        <a className="dropdown-item mb-2" href={linkInOrAccount} style={{ background: 'linear-gradient(45deg,#5BC7F2, #FF7FA9)', color: 'white', borderRadius: '25px' }}>{textInOrAccount}</a>
                                        <a className="dropdown-item" href={linkOutOrUp} style={{ backgroundColor: 'grey', color: 'white', borderRadius: '25px' }}>{textOutOrUp}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-10 col-xl-5">
                            <div className="txt">
                                <h2>Меню в Roll Paradise</h2>
                                <p>В нашем суши-баре Roll Paradise, работает слаженная команда молодых поваров под предводительством Ивана Петрова. В меню представлены разнообразные суши и роллы, изготовленные из свежайших ингредиентов, включая классические и авторские рецепты.</p>
                                <br />
                                <p>Вы можете насладиться традиционными oнигири и сашими, а также попробовать уникальные роллы с необычными сочетаниями вкусов. Также в меню представлены горячие блюда японской кухни, такие как темпура, якисоба и удон, разнообразные закуски и салаты.</p>
                                <br />
                                <p>В суши-баре создается уютная и дружелюбная атмосфера, идеальная для встреч с друзьями, семейных обедов и романтических ужинов. Мы также предлагаем комплексные обеды по будням и специальные предложения на выходные.</p>
                                <br />
                                <p>В нашем суши-баре организуются вечеринки с приглашенными диджеями и корпоративные мероприятия для больших компаний, а также празднуются дни рождения.</p>
                                <br />
                                <button className="btn" id="btn" type="button">Read more</button>
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
                                    <img alt="vk?" className="mx-auto" width="30px" src="../static/icons/vk.png" />
                                    <a className="text-light" target="_blank" href="https://vk.com/id198165768">vk.com/kate.mamonova</a>
                                </div>
                                <div className="col-6 col-xl-3">
                                    <img alt="github?" className="mx-auto" width="30px" src="../static/icons/mail.png" />
                                    katevajs_mamonova@mail.ru
                                </div>
                                <div className="col-6 col-xl-3">
                                    <img alt="github?" className="mx-auto" width="30px" src="../static/icons/github.png" />
                                    <a className="text-light" target="_blank" href="https://github.com/ekaterina950">github.com/ekaterina950</a>
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
    );
}

export default HomePage;
