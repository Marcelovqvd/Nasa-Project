import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PictureOfDay from '../pages/PictureOfDay';
import Asteroids from '../pages/Asteroids';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pictureofday" component={PictureOfDay} />
    <Route path="/asteroids" component={Asteroids} />
  </Switch>
)

export default Routes;
