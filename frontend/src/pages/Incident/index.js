import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Incident() { 
    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Register a new incident</h1>
                    <p>Detailed describe your incident to find a hero to solve this.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Profile
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Incident title" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value in dollar" />

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}