import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { ref, onValue } from 'firebase/database'

const useFetchSortedData = ({ url, field }: { url: string; field: string }) => {
	const [data, setData] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (url) {
			fetchData(url)
		}
	}, [url])

	function fetchData(url: string) {
		setLoading(true)
		onValue(ref(db, url), snapshot => {
			setData([])
			const raw = snapshot.val()
			if (!raw) {
				setLoading(false)
				return
			}
			const dataValue = Object.values(raw).sort((a: any, b: any) =>
				a[field] > b[field] ? 1 : -1
			)
			dataValue.map(item => setData((oldArray: any) => [...oldArray, item]))
			setLoading(false)
		})
	}

	return [data, loading]
}
export default useFetchSortedData
