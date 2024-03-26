import { Image, Table } from '@mantine/core'
import AdminPanelSettings from './AdminPanelSettings'
import { memo } from 'react'
// import { useParams } from 'react-router-dom'

interface IProps {
	element: any
	deleteLink: any
}

const AdminRow = memo(({ element, deleteLink }: IProps) => {
	// const { categoryElement, adminElement } = useParams()
	return (
		<Table.Tr>
			{/* {variant === 'units' || variant === 'promo' ? (
				<td>{element.uuid}</td>
			) : undefined} */}
			{/* {variant === 'main' ||
			variant === 'category' ||
			variant === 'pizza' ||
			variant === 'promo' ? ( */}
				<Table.Td>{element.position}</Table.Td>
			{/* ) : undefined} */}
			<Table.Td>{element.name}</Table.Td>
			{/* {variant === 'main' ||
			variant === 'category' ||
			variant === 'pizza' ||
			variant === 'promo' ? ( */}
				<Table.Td>
					<Image w={50} src={element.image ? element.image : element.imageArr[0]} alt={element.name} />
				</Table.Td>
			{/* ) : undefined} */}

			{/* {variant === 'main' || variant === 'pizza' ? (
				<td>{element.unit}</td>
			) : undefined} */}
			{/* {variant === 'main' || variant === 'pizza' ? (
				<td>
					<Group>
						{element.variant
							? Object.values(element.variant).map((item: any, index) => {
									return item.id != '' ? (
										<Text key={index}>{item.id}</Text>
									) : undefined
							  })
							: undefined}
					</Group>
				</td>
			) : undefined} */}
			{/* {variant === 'main' || variant === 'category' || variant === 'pizza' ? ( */}
				<Table.Td>{`/${element.link}`}</Table.Td>
			{/* ) : undefined} */}
			{/* {variant === 'main' || variant === 'pizza' ? (
				<td>
					<Spoiler maxHeight={50} showLabel='Еще...' hideLabel='Скрыть'>
						{element.compound}
					</Spoiler>
				</td>
			) : undefined} */}
			{/* {variant === 'main' ? <td>{element.category}</td> : undefined}
			{variant === 'main' || variant === 'pizza' ? (
				<td>
					<Group>
						{element.variant
							? Object.values(element.variant).map((item: any, index) => {
									return item.size != 0 ? (
										<Text key={index}>
											{item.size} - {item.price}р
										</Text>
									) : undefined
							  })
							: undefined}
					</Group>
				</td>
			) : undefined}
			{variant === 'promo' ? <td>{element.day}</td> : undefined}
			{variant === 'promo' ? <td>{element.descr}</td> : undefined} */}
			<Table.Td>
				<AdminPanelSettings
					element={element}
					deleteLink={
						deleteLink
						// variant === 'main'
						// 	? `/menu/${adminElement}/${element.link}`
						// 	: variant === 'units'
						// 	? `units/${element.uuid}`
						// 	: variant === 'promo'
						// 	? `promo/${element.uuid}`
						// 	: variant === 'pizza'
						// 	? `/menu/pizza-ads/${element.link}`
						// 	: `/${categoryElement}/${element.link}`
					}
				/>
			</Table.Td>
		</Table.Tr>
	)
})
export default AdminRow
