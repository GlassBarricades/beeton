import './App.css'
import {
	Navigate,
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
import {CategoryPage, categoryLoader} from './pages/CategoryPage'
import InfoPage from './pages/InfoPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './hoc/RequireAuth'
import AdminLayout from './components/layout/AdminLayout'
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import {ProductPage, productLoader} from './pages/ProductPage'
import AdminInfoPage from './pages/admin/AdminInfoPage'
import AdminPartnersPage from './pages/admin/AdminPartnersPage'
import AdminMainSettings from './pages/admin/AdminMainSettings'
import { useEffect } from 'react'
import { fetchSettings } from './store/settingsSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import AdminVideoPage from './pages/admin/AdminVideoPage'

function App() {
	const settings = useAppSelector(state => state.settings.settings)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchSettings())
	}, [dispatch])

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<MainAppLayout />}>
					<Route index element={<HomePage image={settings.mainImage} textHero={settings.heroText}/>} />
					<Route path='catalog' element={<CatalogPage />} />
					<Route path='catalog/:category' element={<CategoryPage />} loader={categoryLoader} />
					<Route path='catalog/:category/:product' element={<ProductPage />} loader={productLoader}/>
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
								<Navigate to='/admin/mainsettings' replace />
							</RequireAuth>
						}
					/>
					<Route
						path='category'
						element={
							<RequireAuth>
								<AdminCategoriesPage />
							</RequireAuth>
						}
					/>
					<Route
						path=':category'
						element={
							<RequireAuth>
								<AdminProductsPage />
							</RequireAuth>
						}
					/>
					<Route
						path='info'
						element={
							<RequireAuth>
								<AdminInfoPage />
							</RequireAuth>
						}
					/>
					<Route
						path='partners'
						element={
							<RequireAuth>
								<AdminPartnersPage />
							</RequireAuth>
						}
					/>
					<Route
						path='video'
						element={
							<RequireAuth>
								<AdminVideoPage />
							</RequireAuth>
						}
					/>
					<Route
						path='mainsettings'
						element={
							<RequireAuth>
								<AdminMainSettings />
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
