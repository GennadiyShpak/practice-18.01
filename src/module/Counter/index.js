import reducer from './redux/reducers';
import { Route,NavLink } from 'react-router-dom';

import Counter from './container/Counter';
import ReduxCounter from './container/ReduxCounter';

const CounterModule = {
  reducers: { Counter: reducer },
  routes: [
    <Route exact path={'/counter'} component={Counter} />,
    <Route exact path={'/reduxCounter'} component={ReduxCounter} />,
  ],
  navItems:[<>
<NavLink to={'/counter'}>
counter
</NavLink>
<NavLink to={'/reduxCounter'}>
redux counter
</NavLink>
</>
  ]
};
export default CounterModule;
