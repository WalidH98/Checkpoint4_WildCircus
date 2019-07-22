import React, { Component } from 'react'
import Header from '../header/Header';
import './WildPage.css'
import TrioPicture from '../CardGroup/CardGroup';
import TableauPrix from '../Table/Table';
import WildForm from '../Form/Form';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'



export default class WildPage extends Component {
    render() {
        return (
            <div>
                <Header />

                <div>
                    <ul>
                        <li><a href="#Performances">Performances</a></li>
                        <li><a href="#About Us">About Us </a></li>
                        <li><a href="#Prices">Prices</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>

                </div>
                <div>
                    <img  width="60px" height="60px" src="https://www.onlygfx.com/wp-content/uploads/2017/12/new-stamp-2-1024x1024.png"/>
                    <Link to="/Boutique"> <h2 className="blink">VISIT OUR SHOP</h2></Link>
                    <img  width="60px" height="60px" src="https://www.onlygfx.com/wp-content/uploads/2017/12/new-stamp-2-1024x1024.png"/>
                </div>
                <div id="Performances"  >

                    <h1>Performances</h1>

                    <TrioPicture />
                </div>
                <div id="About Us">
                    <h1>About Us</h1>
                    <div className="container">
                        <p>On Halloween night, an old man from New Jersey was found dead in the kitchen of his home. He lived alone with his wife. The man was not easy in nature and he cursed the children.
                            On the morning of October 31, the old man had carefully inserted razor blades into apples which he planned to distribute to the children in the evening.
                            His wife, who was firmly opposed to the criminal acts of her grumpy husband, decided to stop the massacre planned by the old man. She made her favorite pie and invited her to eat a good tip for dessert, just before the kids knocked on the door.
                            The man, who in the manner of a pig took huge bites of everything he ingested, asked his wife just before swallowing:
                            "But where did you get the apples to make the pie, I took them all this morning? "
                            It was while drinking that he got the answer to his question as he cut his throat from the inside ...
                    </p>
                    </div>

                </div>
                <div id="Prices">
                    <h1>Prices</h1>
                    <TableauPrix />
                    <p>*Reduction with justificatory </p>
                </div>
                <div  className="container" id="Contact">
                    <h1 >Contact</h1>
                    <WildForm />
                </div>
            </div >




        )
    }
}
