// test/utils.js
import React from "react";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

import { configureStore } from "store";

const store = configureStore({});

const reduxRender = (node, options = {}) => {
  return render(
    <div className="App">
      <Provider store={options.store || store}>
        {node}
      </Provider>
    </div>,
    options
  );
};

const customRender = (node, options = {}) => {
  return reduxRender(
    <MemoryRouter
      initialEntries={options.initialEntries || []}
      initialIndex={options.initialIndex || 0}>
      {node}
    </MemoryRouter>,
    options
  );
};

const routerRender = (ui, { route = "/", ...renderOptions } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = reduxRender(<Router history={history}>{ui}</Router>, renderOptions);
  return {
    ...utils,
    history,
  };
};

// re-export everything
export * from '@testing-library/react';;

// override render method
export { customRender as render, routerRender, reduxRender, store };
