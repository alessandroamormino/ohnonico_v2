import React, { createContext, useMemo } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const location = useLocation();
  const navigate = useNavigate();

	// esport context data
	const contextData = useMemo(
		() => ({
			location,
			navigate
		}),
		[
			location, 
			navigate
		],
	);

  return (
	<StateContext.Provider value={{ contextData }}>
	  {children}
	</StateContext.Provider>
  );
}