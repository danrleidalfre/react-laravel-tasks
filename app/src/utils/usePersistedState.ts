import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(
  key: string,
  initialState: {
    title: string
    colors: {
      'gray-700': string
      'gray-600': string
      'gray-500': string
      'gray-400': string
      'gray-300': string
      'gray-200': string
      'gray-100': string

      white: string

      'blue-dark': string
      blue: string
      'purple-dark': string
      purple: string

      red: string
      yellow: string
    }
  },
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
