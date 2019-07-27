import React from 'react'

import { initialState, reducer } from '../reducers/dataReducer'
import { useService } from '../services/deckService'

export const DataContext = React.createContext()

export function DataProvider(props) {
  const [data, dataDispatch] = React.useReducer(reducer, initialState)
  const deckService = useService(data, dataDispatch)

  return (
    <DataContext.Provider
      value={{
        data,
        dataDispatch,
        deckService
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
