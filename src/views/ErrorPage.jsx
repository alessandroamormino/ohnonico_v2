import { useEffect } from 'react';
import { useRouterError, useNavigate, useLocation } from 'react-router';

export const ErrorPage = () => {
	const { error } = useRouterError();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!error) {
			navigate('/');
		}
	}, [error, navigate]);

	return (
		<div>
			<h1>Error</h1>
			<p>
				<code>{location.pathname}</code> could not be found.
			</p>
		</div>
	);
}