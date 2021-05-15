export default function JournalItem() {
    return (
        <div className="w-full flex flex-col items-center max-w-xs border-b p-3 ">
            <div className="w-full">
                <a href="#">Зарплаты</a>
            </div>
            <div className="">
                <a href="#" className="font-bold hover:underline">Зарплаты разработчиков во втором полугодии 2020: языки и квалификации</a>
            </div>
            <div className="w-full">
                <p className="text-gray-400">17 марта</p>
            </div>
        </div>
    )
}