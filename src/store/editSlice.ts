import { createSlice } from '@reduxjs/toolkit'

interface IEditData {
	edit: boolean
	editUuid: string
	editData: {
		name?: string
		title?: string
		link?: string
		value?: string
		position?: number
		image?: string
		description: string
		text?: string
		content: string
		firstImg?: string
		mainImage?: string
		heroText?: string
		logo?: string
		logoDarkTheme?: string
		phone?: string
		adress?: string
		adressLink?: string
		email?: string
		telegram?: string
		instagram?: string
		viber?: string
		imageArr?: string[]
		price?: string
		visible?: boolean
		delivery?: boolean
		inside?: boolean
		aboutImage?: string
		aboutText?: string
	}
	editModal: boolean
}

const initialState: IEditData = {
	edit: false,
	editUuid: '',
	editData: {
		description: '',
		text: '',
		content: ''
	},
	editModal: false,
}

const editSlice = createSlice({
	name: 'edit',
	initialState: initialState,
	reducers: {
		edited(state, action) {
			state.edit = true
			state.editData = action.payload
			state.editUuid = action.payload.uuid
			state.editModal = true
		},
		endEditing(state) {
			state.edit = false
		},
		setEditUuid(state, action) {
			state.editUuid = action.payload.tempUuid
		},
		setEditData(state, action) {
			state.editData = action.payload.formData
		},
		openModal(state) {
			state.editModal = true
		},
		closeModal(state) {
			state.editModal = false
			state.editData = {
				description: '',
				text: '',
				content: ''
			}
			state.edit = false
			state.editUuid = ''
		},
	},
})

export const {
	edited,
	endEditing,
	setEditUuid,
	setEditData,
	openModal,
	closeModal,
} = editSlice.actions
export default editSlice.reducer
