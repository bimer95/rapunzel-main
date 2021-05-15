export default function Header() {
    return (
        <div className="w-full flex flex-col ">
            <div className="flex justify-between p-3 bg-white"> 
                <div>
                    <img className="w-5/12" src="Rapunzel.png"/> {/* лого */}
                </div>
                <div className="space-x-4"> {/* кнопки */}
                    <button className="bg-gray-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-2 font-bold text-sm">Login </button>
                    <button className="bg-green-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-2 font-bold text-sm">Register </button>
                </div>
            </div>
            <div className="bg-white mt-1 p-4 flex justify-between"> {/* разделы */}
                <div className="text-gray-400 font-semibold flex items-center">
                    <h1 className="">Jobs</h1>
                </div>
                <div>
                    <button className="bg-red-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-2 font-bold text-sm">Post a Job </button>
                </div>
            </div>
        </div>

    )
}