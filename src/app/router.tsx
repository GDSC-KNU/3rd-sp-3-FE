import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
// import { RegisterPage } from '@/pages/Register/ui';
import { LoginPage } from '@/pages/login/ui';
import { SocialLogin } from '@/pages/login/ui/socialLogin';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				element: <LoginPage />,
			},
			// {
			// 	path: 'redirect',
			// 	element: <SocialLogin />,
			// },
		],
	},
]);
