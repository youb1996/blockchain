import React, { Component } from 'react';

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'



export default class AppBar extends Component {
    render() {
        return (
            <nav id="nav">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse" id="menu">
                        <ul>
                        <li class="active"><Link to='/'>Home</Link></li>
                            <li class="active"><Link to='/blocks'>Blocks</Link></li>
                            <li><Link to='/conduct-transaction'>Conduct a Transaction</Link></li>
                            <li><Link to='/transaction-pool'>Transaction Pool</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
