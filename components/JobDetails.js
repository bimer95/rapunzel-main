export default function JobDetails() {
    return (
        <div className="bg-gray-200 h-screen-full flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white mt-4 p-8 shadow-xl">
                <div className="text-2xl font-bold text-center mb-6 ">
                    <h1> Job details</h1>
                </div>
                <div className="border-b-2"></div>
                <div className="salary mt-1">
                    <div className="salary__header pl-1 pt-2 mb-1">
                        <h1 className="font-bold text-gray-800">Base salary</h1> {/* зарплата */}
                    </div>
                    <div className="salary__amount w-full mt-1 flex gap-6">
                        <input className="w-3/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="from" />
                        <input className="w-3/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="to" />
                        <select className="w-1/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>₽</option>
                            <option>€</option>
                            <option>$</option>
                            <option>₴</option>
                            <option>₸</option>
                        </select>
                    </div>
                    <input type="checkbox" className="transform scale-125 mt-3 m-1" />&nbsp;
                            <label>The option of getting paid in digital currency</label>

                </div>
                <br />
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Job description</h1>
                </div>
                <input className="w-full p-7 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" />
                <p className="text-gray-400">Areas of responsibility: ...</p>
                <p className="text-gray-400">The key characteristics of the ideal candidate for the position are: ...</p>
                <br />
                <div className="professionalSkills__header">
                    <div className="pl-1 pt-2 mb-1">
                        <h1 className="font-bold text-gray-800">Skills</h1> {/* навыки */}
                    </div>


                    <div className="professionalSkills__drop">
                        <input className="w-full p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="For example, JavaScript" />
                    </div>
                    <button className="mt-2 w-12 h-8 bg-gray-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-2 font-bold text-sm ">Add </button>
                </div>
                <br />
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Experience </h1> {/* уровень */}
                </div>
                <div className="flex flex-row w-12/12 ">

                    <select className="w-full p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                        <option>Trainee</option>
                        <option>Junior</option>
                        <option>Middle </option>
                        <option>Senior</option>
                    </select>
                </div>
                <div>
                    <br />

                    <div className="fieldOfActivity__checkboxes mt-3">
                        <div className="pl-1 pt-2 mb-1">
                            <h1 className="font-bold">Type of position</h1> {/* специализация */}
                        </div>
                        <div className="pl-1 pt-2 mb-1">

                            <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                            <label>Contract</label>

                            <div>
                                <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                            <label>Freelance</label>
                            </div>

                            <div>
                                <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                            <label>Full-Time</label>
                            </div>

                            <div>
                                <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                            <label>Internship</label>
                            </div>
                            <div>
                                <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                            <label>Part-Time</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">How to apply</h1>
                </div>
                <input className="w-full p-7 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" />
                <br />
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Application email/URL</h1> {/* email */}
                </div>
                <input className="w-full p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="Email" />
            </div>
        </div>
    )
}