export default function EmployerOfMonth() {
    return (
        <div className="flex container flex-col max-w-xs p-3  bg-white mt-3 rounded">
            <div className="pl-2 pt-2 mb-4">
                <h1 className="font-bold">Employer of the month</h1>
            </div>
            <hr />
            <div className="w-full flex justify-center">
                <img className="" src="1.png" />
            </div>
            <div className="w-full flex justify-center">
                <h1 className="font-semibold text-xl">Evil Martians</h1>
            </div>
            <div className="w-full flex justify-center mt-3">
                <p className="text-green-500 font-semibold">4.71</p>
            </div>
            <div className="w-full text-center">
                <p className="">Все организации города, их контакты, адреса, время работы + трехмерная карта + маршруты проезда</p>
            </div>
            <div className="text-center mt-2 mb-4">
                <a className="text-blue-600 font-semibold hover:underline" href="#">More details</a>
            </div>
            <hr />
            <div className="text-center my-3">
                <a className="hover:underline text-gray-400 font-semibold" href="#">Active vacancies: 28</a>
            </div>
        </div>
    )
}