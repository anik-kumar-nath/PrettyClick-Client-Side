import React from 'react';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const Pagination = ({ items, pageNo, setPageNo, pageItems }) => {
    const numberOfPage = Math.ceil(items / pageItems);
    const pageArray = [...Array(numberOfPage).keys()]
    return (
        <div>
            {
                pageArray.length > 1 &&
                <div className="w-full bg-white">
                    <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                        <div className="inline-flex flex-wrap justify-center gap-1">

                            <div className='flex gap-1'>
                                <button className="inline-flex flex-wrap h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" onClick={() => setPageNo(0)} title='Start'>
                                    <BiFirstPage />
                                </button>
                                <button href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" onClick={() => (pageNo) !== 0 ? setPageNo(pageNo - 1) : setPageNo(0)} title='Previous'>
                                    <GrFormPrevious />
                                </button>
                            </div>
                            {
                                pageArray.map((page) =>
                                    <button key={page} onClick={() => setPageNo(page)} className={`inline-flex flex-wrap h-8 w-8 items-center justify-center rounded border border-primary ${page === pageNo && 'bg-purple-500 font-bold shadow-md'} hover:bg-purple-300`}>
                                        {page + 1}
                                    </button>
                                )
                            }


                            <div className='flex gap-1'>
                                <button className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" onClick={() => (pageNo) !== numberOfPage - 1 ? setPageNo(pageNo + 1) : setPageNo(numberOfPage - 1)} title='Next'>
                                    <GrFormNext />
                                </button>
                                <button className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" onClick={() => setPageNo(numberOfPage - 1)} title='End'>
                                    <BiLastPage />
                                </button>
                            </div>
                        </div>
                        <div className="text-gray-700">
                            <span className="font-medium text-black">{pageNo * pageItems + 1} - {items < (pageNo * pageItems + pageItems * 1) ? items : (pageNo * pageItems + pageItems * 1)}</span> of {items} records
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Pagination;