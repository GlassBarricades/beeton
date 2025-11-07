import './App.css'
import {
	Navigate,
	Outlet,
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
import BlogPage from './pages/BlogPage'
import BlogPostPage, { blogPostLoader } from './pages/BlogPostPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './hoc/RequireAuth'
import AdminLayout from './components/layout/AdminLayout'
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import {ProductPage, productLoader} from './pages/ProductPage'
import AdminInfoPage from './pages/admin/AdminInfoPage'
import AdminAboutPage from './pages/admin/AdminAboutPage'
import AdminPartnersPage from './pages/admin/AdminPartnersPage'
import AdminMainSettings from './pages/admin/AdminMainSettings'
import { useEffect } from 'react'
import { fetchSettings } from './store/settingsSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import AdminVideoPage from './pages/admin/AdminVideoPage'
import ForDesignersPage from './pages/ForDesignersPage'
import AdminForDesignersPage from './pages/admin/AdminForDesignersPage'
import AdminBlogPage from './pages/admin/AdminBlogPage'

const formatSlug = (value?: string) =>
	value ? value.replace(/-/g, ' ') : undefined

const categoryBreadcrumb = (match: any) =>
	match?.data?.dataBase?.name ?? formatSlug(match?.params?.category) ?? 'Категория'

const productBreadcrumb = (match: any) =>
	match?.data?.productDataBase?.name ?? formatSlug(match?.params?.product) ?? 'Изделие'

const blogPostBreadcrumb = (match: any) =>
	match?.data?.post?.title ?? formatSlug(match?.params?.slug) ?? 'Статья'

const adminCategoryBreadcrumb = (match: any) =>
	formatSlug(match?.params?.category) ?? 'Категория'

function App() {
	const settings = useAppSelector(state => state.settings.settings)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchSettings())
	}, [dispatch])

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<MainAppLayout />} handle={{ breadcrumb: 'Главная' }}>
					<Route
						index
						element={
							<HomePage
								image={settings.mainImage}
								textHero={settings.heroText}
							/>
						}
					/>
					<Route path='catalog' element={<Outlet />} handle={{ breadcrumb: 'Каталог' }}>
						<Route index element={<CatalogPage />} />
						<Route
							path=':category'
							id='catalog-category'
							loader={categoryLoader}
							handle={{ breadcrumb: categoryBreadcrumb }}
							element={<Outlet />}
						>
							<Route index element={<CategoryPage />} />
							<Route
								path=':product'
								element={<ProductPage />}
								loader={productLoader}
								handle={{ breadcrumb: productBreadcrumb }}
							/>
						</Route>
					</Route>
					<Route path='for-designers' element={<ForDesignersPage />} handle={{ breadcrumb: 'Для дизайнеров' }} />
					<Route path='about' element={<AboutPage />} handle={{ breadcrumb: 'О нас' }} />
					<Route path='blog' element={<Outlet />} handle={{ breadcrumb: 'Блог' }}>
						<Route index element={<BlogPage />} />
						<Route
							path=':slug'
							element={<BlogPostPage />}
							loader={blogPostLoader}
							handle={{ breadcrumb: blogPostBreadcrumb }}
						/>
					</Route>
					<Route path='contacts' element={<ContactsPage />} />
					<Route path='info' element={<InfoPage />} handle={{ breadcrumb: 'Информация' }} />
				</Route>
				<Route
					path='admin'
					element={
						<RequireAuth>
							<AdminLayout />
						</RequireAuth>
					}
					handle={{ breadcrumb: 'Админка' }}
				>
					<Route
						path='blog'
						element={
							<RequireAuth>
								<AdminBlogPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Блог' }}
					/>
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
								<Outlet />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Категории' }}
					>
						<Route
							index
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
							handle={{ breadcrumb: adminCategoryBreadcrumb }}
						/>
					</Route>
					<Route
						path='contacts'
						element={
							<RequireAuth>
								<AdminInfoPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Контакты' }}
					/>
					<Route
						path='about'
						element={
							<RequireAuth>
								<AdminAboutPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'О нас' }}
					/>
					<Route
						path='for-designers'
						element={
							<RequireAuth>
								<AdminForDesignersPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Для дизайнеров' }}
					/>
					<Route
						path='partners'
						element={
							<RequireAuth>
								<AdminPartnersPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Партнёры' }}
					/>
					<Route
						path='video'
						element={
							<RequireAuth>
								<AdminVideoPage />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Видео' }}
					/>
					<Route
						path='mainsettings'
						element={
							<RequireAuth>
								<AdminMainSettings />
							</RequireAuth>
						}
						handle={{ breadcrumb: 'Основные настройки' }}
					/>
				</Route>
				<Route path={'/login'} element={<LoginPage />} />
			</>
		)
	)

	return <RouterProvider router={router}></RouterProvider>
}

export default App
