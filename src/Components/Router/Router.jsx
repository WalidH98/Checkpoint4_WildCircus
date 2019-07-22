
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Acceuil from '../Acceuil/Acceuil';
import WildPage from '../WildPage/WildPage';
import Boutique from '../Boutique/Boutique';
import Panier from '../Panier/Panier';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Acceuil} />
            <Route path='/WildCircus' component={WildPage} />
            <Route path='/Boutique' component={Boutique}/>
            <Route path='/Panier' component={Panier}/>
        </Switch>
    );
}
