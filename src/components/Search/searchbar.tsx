import { type SearchBarProps } from '../../interfaces';

export default function SearchBar(props: SearchBarProps) {
    const style = props.isActive
        ? 'border-2 border-solid border-black focus:outline-none focus:border-blue-500'
        : 'border-2 border-solid border-black';

    return (
        <form action="" className="w-2/5 m-auto">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="search" className={`${style}  block w-full rounded-lg text-black text-sm pl-10 p-2.5 dark:placeholder-gray-400 }`} placeholder="Search for latest news..." required />
                <div id="dropdown-search-topic" className="z-10 divide-y divide-gray-100 rounded-lg shadow w-2/5 bg-red-600">
                </div>
            </div>
        </form>

    )
};
