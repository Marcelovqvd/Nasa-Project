import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import PictureOfDay from '../pages/PictureOfDay';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list" component={List} />
    <Route path="/pictureOfDay" component={PictureOfDay} />
  </Switch>
)

export default Routes;
