export default function AsideFilter() {
    return (
        <div className="flex container flex-col w-full max-w-full p-3  bg-white mt-3">
            <div className="w-full p-2">
                <div className="category">
                    <div className="category__header">
                        <h1 className="font-bold text-gray-800">Category</h1>
                    </div>
                    <div className="category__checkboxes mt-3">
                        <div className="">
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Backend</label>
                        </div>
                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Frontend</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Applications</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Software development</label>
                        </div>
                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Testing</label>
                        </div>

                        <div className="">
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label className="">Administration</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Design</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Management</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Marketing</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Analytics</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Sales</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Content</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Support</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Personnel</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Office</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Telekom</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Other</label>
                        </div>

                        <div>
                            <input type="checkbox" className="transform scale-150 m-1" />&nbsp;
                            <label>Information Security</label>
                        </div>
                    </div>
                    <div className="btnMore mt-2">
                        <button className="p-1 border font-semibold text-sm w-20 rounded border-gray-400 bg-gray-100">12 more</button>
                    </div>
                </div>
                <div className="qualification mt-5">
                    <div className="qualification__header ">
                        <h1 className="font-bold text-gray-800">Experience</h1>
                    </div>
                    <div className="qualification__select w-full">
                        <select className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>Any</option>
                            <option>Intern</option>
                            <option>Junior</option>
                            <option>Middle</option>
                            <option>Senior</option>
                            <option>Lead</option>
                        </select>
                    </div>
                </div>
                <div className="professionalSkills mt-5">
                    <div className="professionalSkills__header">
                        <h1 className="font-bold text-gray-800">Skills</h1>
                    </div>
                    <div className="professionalSkills__drop">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="For example, JavaScript" />
                    </div>
                </div>
                <div className="salary mt-5">
                    <div className="salary__header">
                        <h1 className="font-bold text-gray-800">Salary</h1>
                    </div>
                    <div className="salary__amount w-full mt-3 flex gap-2">
                        <input className="w-3/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="From" />
                        <select className="w-1/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>₽</option>
                            <option>€</option>
                            <option>$</option>
                            <option>₴</option>
                            <option>₸</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                        <label>Indicate</label>
                    </div>
                </div>
                <div className="location mt-5">
                    <div className="location__header">
                        <h1 className="font-bold text-gray-800">Location</h1>
                    </div>
                    <div className="location__city w-full">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="Введите город" />
                    </div>
                    <div className="mt-3">
                        <input type="checkbox" className="transform scale-125 m-1" />&nbsp;
                        <label>Remote</label>
                    </div>
                </div>
                <div className="employmentType mt-5">
                    <div className="employmentType__header">
                        <h1 className="font-bold text-gray-800">Job types</h1>
                    </div>
                    <div className="employmentType__select w-full">
                        <select className="w-full p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>Contract</option>
                            <option>Freelance</option>
                            <option>Full-Time</option>
                            <option>Internship</option>
                            <option>Part-Time</option>
                        </select>
                    </div>

                </div>
                <div className="company mt-5">
                    <div className="company__header">
                        <h1 className="font-bold text-gray-800">Company</h1>
                    </div>
                    <div className="location__city w-full">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="For example, Habr" />
                    </div>
                </div>

            </div>
        </div>
    )
}