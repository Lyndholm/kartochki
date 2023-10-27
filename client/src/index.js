import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import CardGroupStore from "./store/CardGroupStore";
import CardStore from "./store/CardStore";


export const Context = createContext(null)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    cardGroup: new CardGroupStore(),
    card: new CardStore()
  }}>
    <App />
  </Context.Provider>
);

