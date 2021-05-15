export default function TellPosition() {
    return (
        <div className="bg-gray-200 h-screen-full flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white mt-4 p-8 shadow-xl">
                <div className="text-2xl font-bold text-center mb-6 ">
                    <h1>Post a job</h1>
                </div>
                <div className="border-b-2"></div>
                <div>
                    <label className="font-bold">Company name</label>
                    <input className="w-full p-2 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" type="text" />
                </div>
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Job title</h1>
                </div>
                <div>
                    <input className="w-full  p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="e.g. Blockchain Engineer, Community Manager" />
                </div>
                <br />
                <div className="pl-1 pt-5 ">
                    <h1 className="font-bold ">Category</h1>
                </div>
                <div className="flex flex-row w-12/12 ">
                    <select className="w-full p-2 mt-2 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                        <option>Tech</option>
                        <option>Design</option>
                        <option>Business Development </option>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Customer Support</option>
                        <option>Operations</option>
                        <option>Analyst</option>
                        <option>Other</option>
                    </select>
                </div>
                <br />
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Location Requirements</h1>
                </div>
                <input className="w-full p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="Enter city" />
                <input type="checkbox" className="transform scale-125 mt-3 m-1" />&nbsp;
                            <label>Remote</label>
                {/* <p className="text-white-400">A job description or JD is a written narrative that describes the general tasks, or other related duties, and responsibilities of a position.</p> */}
                <br />

            </div>
        </div>
    )
}