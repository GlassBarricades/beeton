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
import {CategoryPage, categoryLoader} from './pages/CategoryPage'
import InfoPage from './pages/InfoPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './hoc/RequireAuth'
import AdminLayout from './components/layout/AdminLayout'
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import {ProductPage, productLoader} from './pages/ProductPage'
import AdminInfoPage from './pages/admin/AdminInfoPage'
import AdminMainPage from './pages/admin/AdminMainPage'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<MainAppLayout />}>
					<Route index element={<HomePage />} />
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
								<AdminMainPage />
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
				</Route>
				<Route path={'/login'} element={<LoginPage />} />
			</>
		)
	)

	return <RouterProvider router={router}></RouterProvider>
}

export default App
