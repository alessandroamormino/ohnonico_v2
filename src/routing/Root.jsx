import {StateProvider} from '@context';
import {Outlet} from 'react-router-dom';

export const Root = () => {
	return (
		<>
			<StateProvider>
				<Outlet />
			</StateProvider>
		</>
	)
}