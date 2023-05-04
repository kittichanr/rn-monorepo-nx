import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './types'

const useShallowSelector: TypedUseSelectorHook<RootState> = selector => {
	return useSelector(selector, shallowEqual)
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useShallowSelector
