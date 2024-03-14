import './App.css'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import MainAppLayout from './components/layout/MainAppLayout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import CategoryPage from './pages/CategoryPage'
import InfoPage from './pages/InfoPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './hoc/RequireAuth'
import AdminLayout from './components/layout/AdminLayout'
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<MainAppLayout />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />
					<Route path='catalog/:category' element={<CategoryPage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='contacts' element={<ContactsPage />} />
					<Route path='info' element={<InfoPage />} />
				</Route>
				<Route
					path='admin'
					element={
						<RequireAuth>
							<AdminLayout />
						</RequireAuth>
					}
				>
					<Route
						index
						element={
							<RequireAuth>
								<AdminCategoriesPage />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path={'/login'} element={<LoginPage />} />
			</>
		)
	)

	return <RouterProvider router={router}></RouterProvider>
}

export default App
