'use client'
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
interface PaginationProps {
	currentPage: number;
	totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
	const { replace, push } = useRouter();
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const handlePageChange = (newPage: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', newPage.toString());
		//return `${pathname}?${params.toString()}`
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className=" mx-auto flex justify-center items-center space-x-4 rounded-lg shadow-lg shadow-gray-700 max-w-max w-full">
			<button
				className={`px-4 py-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''} rounded-md hover:transition ease-in-out delay-100 hover:bg-lime-800 hover:text-white duration-100`}
				disabled={currentPage === 1}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				<span className='font-semibold'>
					Anterior
				</span>
			</button>
			<span>
				{currentPage} / {totalPages}
			</span>
			<button
				className={`px-4 py-2 ${currentPage === totalPages ? 'cursor-not-allowed' : ''} rounded-md hover:transition ease-in-out delay-100 hover:bg-lime-800 hover:text-white duration-100`}
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				<span className='font-semibold'>
					Siguiente
				</span>
			</button>
		</div>
	);
};

export default Pagination;
