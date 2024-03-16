import { Table, ScrollArea, Text } from '@mantine/core'
import { memo } from 'react'

interface IProps {
    rows: []
    columnArray: string[]
    loading: string | boolean
}

const AdminTable = memo(({ rows, columnArray, loading }: IProps) => {

	return (
		<>
			{loading === true || loading === 'loading' ? (
				<Text size='xl'>Загрузка...</Text>
			) : (
				<ScrollArea h={'70vh'} maw={'100%'} mx='auto' offsetScrollbars>
					<Table
						highlightOnHover
						withTableBorder
						withColumnBorders
						mt='md'
					>
						<thead>
							<tr>
								{columnArray.map((item, index) => {
									return <th key={index}>{item}</th>
								})}
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</ScrollArea>
			)}
		</>
	)
})

export default AdminTable