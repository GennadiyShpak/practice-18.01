import React from 'react';

import Counter from './Counter';

class Base {
  constructor(...modules) {
    this._middlewares = modules.reduce((acc, { middlewares }) => {
      return module.middleware ? [...acc, ...middlewares] : [...acc];
    }, []);

    this._routes = modules.reduce((acc, { routes }) => {
      return routes ? [...acc, ...routes] : [...acc];
    }, []);

    this._reducers = modules.reduce((acc, { reducers }) => {
      return reducers ? {...acc, ...reducers} : { ...acc };
    }, {});
    this._navItems = modules.reduce((acc, { navItems }) => {
      return navItems ? [...acc, ...navItems] : [ ...acc ];
    }, []);
  }
  getReducers() {
    return this._reducers;
  }
  getRoutes() {
    return (
      this._routes &&
      this._routes.map((component, idx) =>
        React.cloneElement(component, { key: `${idx}${this._routes.length}` }),
      )
    );
  }

  getNavItems() {
    return (
      this._navItems?.map((component, idx) =>
        React.cloneElement(component, { key: `${idx}${this._navItems.length}` }),
      )
    );
  }
  getMiddlewares() {
    return this._middlewares;
  }
}

const BaseModules = new Base(Counter);

export default BaseModules;
