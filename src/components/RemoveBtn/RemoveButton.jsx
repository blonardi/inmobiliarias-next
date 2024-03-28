'use client'
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

export default function RemoveButton({ permalink }) {
	const router = useRouter()
	const removeHouse = async () => {
		const confirmed = confirm('Estas seguro de eliminar esta casa?')
		if (confirmed) {
			const res = await fetch(`http://localhost:3001/api/houses/${permalink}`, {
				method: "DELETE"
			});
			if (res.ok) {
				router.refresh()
			}
		}
	}
	return (
		<button onClick={removeHouse} className="text-red-400"><HiOutlineTrash size={24} /></button>
	)
}