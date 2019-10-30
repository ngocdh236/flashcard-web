import React from 'react';

import { initialState, reducer } from '../reducers/dataReducer';
import { useService } from '../services/deckService';

export const DataContext = React.createContext();

export function DataProvider(props) {
  const [data, dispatchData] = React.useReducer(reducer, initialState);
  const deckService = useService(data, dispatchData);

  return (
    <DataContext.Provider
      value={{
        data,
        dispatchData,
        deckService
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
