import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PictureOfDay from '../pages/PictureOfDay';
import Asteroids from '../pages/Asteroids';
import Asteroid from '../pages/Asteroid';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pictureofday" component={PictureOfDay} />
    <Route path="/asteroids" component={Asteroids} />
    <Route path="/asteroid/:id" component={Asteroid} />
  </Switch>
)

export default Routes;
