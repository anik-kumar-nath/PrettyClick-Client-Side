import React from 'react';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const Pagination = () => {
    return (
        <div>
            <div className="w-full bg-white dark:bg-gray-800">
                <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div className="inline-flex justify-center gap-1">
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" title='Start'>
                            <BiFirstPage />
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" title='Previous'>
                            <GrFormPrevious />
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300">
                            1
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300">
                            2
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300">
                            3
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300">
                            4
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300">
                            5
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" title='Next'>
                            <GrFormNext />
                        </a>
                        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary hover:bg-purple-300" title='End'>
                            <BiLastPage />
                        </a>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-gray-700 dark:text-gray-100">1 - 25</span> of 77 records
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;