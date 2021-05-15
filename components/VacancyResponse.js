export default function VacancyResponse() {
    return (
        <div className="w-full flex p-5 mt-3 bg-white rounded">
            <div className="vacancy__info w-9/12 ml-3">
                <div className="pl-1 pt-2 mb-2">
                    <h1 className="font-bold">How to apply</h1>
                    <p><textarea className="w-full p-7 mt-2 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500"></textarea></p>
                </div>
                <div className="pl-1 pt-2 mb-1">
                    <h1 className="font-bold">Application email/URL</h1>
                </div>
                <input className="w-full p-2 mt-1 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="Email" />
            </div>
        </div>
    )
}