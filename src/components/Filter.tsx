import React from 'react'

export default function Filter() {
    return (
        <div className='mt-12 flex justify-between flex-wrap '>
            <div className="flex gap-6 flex-wrap mb-4">
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">Type</option>

                    <option value="pyhsical">Physical</option>
                    <option value="digital">Digital</option>

                </select>
                <input type="text" name="min" placeholder='min price' className='px-2 text-xs rounded-2xl w-24 ring-1 ring-gray-400' />
                <input type="text" name="max" placeholder='max price' className='px-2 text-xs rounded-2xl w-24 ring-1 ring-gray-400' />

                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">Size</option>

                    <option value="pyhsical">Physical</option>
                    <option value="digital">Digital</option>

                </select>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">Color</option>

                    <option value="pyhsical">Physical</option>
                    <option value="digital">Digital</option>

                </select>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">Category</option>

                    <option value="pyhsical">Physical</option>
                    <option value="digital">Digital</option>

                </select>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">All Filters</option>

                    <option value="pyhsical">Physical</option>
                    <option value="digital">Digital</option>

                </select>
            </div>
            <div className=''>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]'>
                    <option value="">Sort By</option>

                    <option value="pyhsical">Price (low to highest)</option>
                    <option value="digital">price (high to lowest)</option>
                    <option value="digital">Newest</option>
                    <option value="digital">Oldest</option>

                </select>
            </div>
        </div>
    )
}
