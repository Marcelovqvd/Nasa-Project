import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PictureOfDay from '../pages/PictureOfDay';
import Asteroids from '../pages/Asteroids';
import Asteroid from '../pages/Asteroid';
import AsteroidsListByDate from '../pages/AsteroidsListByDate';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pictureofday" component={PictureOfDay} />
    <Route path="/asteroids" component={Asteroids} />
    <Route path="/:id" component={Asteroid} />
    <Route path="/asteroidslistbydate" component={AsteroidsListByDate} />
  </Switch>
)

export default Routes;
