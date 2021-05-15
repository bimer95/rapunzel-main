export default function CompanyVacanciesItem() {
    return (
        <div className="w-full flex items-center border-b p-3 ">
            <div className="mr-3">
                <a href="#"><img className="h-16 rounded" src="2.png"></img></a>
            </div>
            <div>
                <a href="#">
                    <h1 className="font-bold text-gray-800 text-sm hover:underline break">Kaspersky Laboratory</h1>
                </a>
                <p className="text-gray-400 text-sm">Vacancies: 112</p>
            </div>

        </div>
    )
}