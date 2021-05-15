export default function CompanyInformation() {
    return (
        <div className="bg-gray-200 h-screen-full flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white mt-4 p-8 shadow-xl ">
                <div className="text-2xl font-bold text-center mb-6 ">
                    <h1>Company Information</h1>
                </div>
                <div className="border-b-2"></div>
                <div className="professionalSkills__drop">
                    <div className="mt-2">
                        <a href="#"><img className="h-16 rounded" src="2.png"></img></a>
                    </div>
                </div>
                <button className="mt-1 w-15 h-8 bg-gray-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-1 font-bold text-xs ">Add Logo </button>
                <form>
                    <div className="mt-6">
                        <label className="font-semibold">Company contacts:</label>
                        <input className="w-full p-2 pl-2 mt-1 bg-gray-200 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" type="text" placeholder="Company website" />
                        <input className="w-full p-2 pl-2 mt-1 bg-gray-200 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" type="text" placeholder="Email " />
                        <input className="w-full p-2 pl-2 mt-1 bg-gray-200 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" type="text" placeholder="Twitter" />
                    </div>
                    <div className="mt-6">
                        <div className="mt-6">
                            <label className="font-semibold">Company tagline</label>
                            <input className="w-full p-8 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" type="text" />
                        </div>
                        <div className="mt-6">
                            <div>
                                <label className="font-semibold">Company Size</label>
                                <select className="w-full p-2 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded">
                                    <option className="selected">small (0 - 19)</option>
                                    <option className="selected">mid (20-249)</option>
                                    <option className="selected">large (250+)</option>
                                    <option className="selected">corporation (10000+)</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <label className="font-semibold">Company Stage</label>
                                <select className="w-full p-2 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded">
                                    <option className="selected"> Early-Stage Startup</option>
                                    <option className="selected"> Growth-Phase Startup</option>
                                    <option className="selected">Enterprise</option>
                                    <option className="selected">Established Company</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <label className="font-semibold">Industry</label>
                                <select className="w-full p-2 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded">
                                    <option className="selected"> Centralised Exchange</option>
                                    <option className="selected"> Financial Services</option>
                                    <option className="selected">Enterprise Blockchain</option>
                                    <option className="selected">Specialised Public Blockchain</option>
                                    <option className="selected"> Assets and Securities Token</option>
                                    <option className="selected"> Cryptocurrency</option>
                                    <option className="selected">Software Development</option>
                                    <option className="selected">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div>
                                <label className="font-semibold">Funding</label>
                                <select className="w-full p-2 pl-2 my-1 bg-gray-200 mt-4 placeholder-gray-500 focus:bg-gray-100 outline-none rounded">
                                    <option className="selected">  Private Company</option>
                                    <option className="selected">  Venture Capital</option>
                                    <option className="selected">ICO</option>
                                    <option className="selected">Public Company</option>
                                    <option className="selected"> Corporate Funding</option>
                                    <option className="selected"> Government</option>
                                    <option className="selected">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button id={'jobPostPrice'} className="w-full p-2 px-3 bg-blue-700 hover:opacity-70 active:bg-blue-800 active:opacity-none focus:outline-none rounded text-white font-semibold text-sm" >Post a Job - $0</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}