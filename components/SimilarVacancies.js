export default function SimilarVacancies() {
    return (
        <div className="flex container flex-col max-w-xs p-3  bg-white mt-3 rounded">
            <div className="pl-2 pt-2 mb-4">
                <h1 className="font-bold">Similar vacancies</h1>
            </div>
            <hr />
            <div className="w-full flex items-center border-b p-3 ">
                <div className="mr-3">
                    <a href="#"><img className="h-16 rounded" src="2.png"></img></a>
                </div>
                <div>
                    <a href="#">
                        <h1 className="font-bold text-gray-800 text-sm hover:underline break">Kaspersky Laboratory</h1>
                    </a>
                    <p className="text-gray-400">Moscow</p>

                    <div className="vacancy__info__salary mb-3">
                        <p className="text-green-500 font-bold">от 227 600 до 273 900 ₽</p>
                    </div>
                </div>

            </div>
            <div className="w-full flex items-center border-b p-3 ">
                <div className="mr-3">
                    <a href="#"><img className="h-16 rounded" src="2.png"></img></a>
                </div>
                <div>
                    <a href="#">
                        <h1 className="font-bold text-gray-800 text-sm hover:underline break">Kaspersky Laboratory</h1>
                    </a>
                    <p className="text-gray-400">Moscow</p>

                    <div className="vacancy__info__salary mb-3">
                        <p className="text-green-500 font-bold">от 227 600 до 273 900 ₽</p>
                    </div>
                </div>

            </div>
            <div className="w-full flex items-center border-b p-3 ">
                <div className="mr-3">
                    <a href="#"><img className="h-16 rounded" src="2.png"></img></a>
                </div>
                <div>
                    <a href="#">
                        <h1 className="font-bold text-gray-800 text-sm hover:underline break">Kaspersky Laboratory</h1>
                    </a>
                    <p className="text-gray-400">Moscow</p>

                    <div className="vacancy__info__salary mb-3">
                        <p className="text-green-500 font-bold">от 227 600 до 273 900 ₽</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="text-center my-3">
                <a className="hover:underline text-gray-400 font-semibold" href="#">Active vacancies: 28</a>
            </div>
        </div>
    )
}