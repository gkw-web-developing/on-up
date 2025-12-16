import React from 'react'

type Props = {}

export default function DBInserterPage({ }: Props) {
	return (
		<div className='flex gap-2'>
			<form action="" className='flex flex-col gap-2 p-2 border border-neutral-200 rounded items-start w-fit'>
				<h1 className='text-xl font-bold'>Add Product</h1>
				<label htmlFor="" className='flex flex-col gap-1'>
					Title
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Price
					<input type="number" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Category
					<select name="" id="" className='border border-neutral-200 rounded'>
						<option value="logistyk">Logistyk</option>
						<option value="eksploatacja">Eksploatacja</option>
						<option value="handlowiec">Handlowiec</option>
					</select>
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Description
					<textarea name="" id="" cols={30} rows={3} className='border border-neutral-200 rounded'></textarea>
				</label>
				<button className='bg-blue-600 hover:bg-blue-500 text-white p-2 rounded cursor-pointer'>Send to Database</button>
			</form>
			<form action="" className='flex flex-col gap-2 p-2 border border-neutral-200 rounded items-start w-fit'>
				<h1 className='text-xl font-bold'>Add User</h1>
				<label htmlFor="" className='flex flex-col gap-1'>
					Name
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Email
					<input type="email" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Password
					<input type="password" className='border border-neutral-200 rounded' />
				</label>
				<button className='bg-blue-600 hover:bg-blue-500 text-white p-2 rounded cursor-pointer'>Send to Database</button>
			</form>
			<form action="" className='flex flex-col gap-2 p-2 border border-neutral-200 rounded items-start w-fit'>
				<h1 className='text-xl font-bold'>Add Billing</h1>
				<label htmlFor="" className='flex flex-col gap-1'>
					Name
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Surname
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Street
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Building
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Flat
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Zip
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					City
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<label htmlFor="" className='flex flex-col gap-1'>
					Country
					<input type="text" className='border border-neutral-200 rounded' />
				</label>
				<button className='bg-blue-600 hover:bg-blue-500 text-white p-2 rounded cursor-pointer'>Send to Database</button>
			</form>
		</div>
	)
}