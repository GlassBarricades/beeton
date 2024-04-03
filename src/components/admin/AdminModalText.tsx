import { Modal } from '@mantine/core'
import { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { closeModalText } from '../../store/textEditSlice'

interface IProps {
	size: string
    children: React.ReactNode
}

const AdminModalText = memo(({ size, children }: IProps) => {
	const editText = useAppSelector(state => state.editText.editText)
	const openText = useAppSelector(state => state.editText.editModalText)
	const dispatch = useAppDispatch()
	return (
		<Modal
			opened={openText}
			size={size}
			onClose={() => dispatch(closeModalText())}
			title={editText ? 'Редактирование текст' : 'Добавление текста'}
		>
			{children}
		</Modal>
	)
})
export default AdminModalText