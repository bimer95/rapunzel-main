import CompanyVacanciesItem from '../components/CompanyVacanciesItem'

export default function CompanyVacansies() {
    return (
        <div className="flex container flex-col w-full max-w-full p-3  bg-white mt-3 rounded">
            <div className="w-full">
                <div className="pl-3">
                    <h1 className="font-bold text-gray-800">Company vacancies</h1>
                </div>
                <div>
                    <CompanyVacanciesItem />
                    <CompanyVacanciesItem />
                    <CompanyVacanciesItem />
                    <CompanyVacanciesItem />
                    <CompanyVacanciesItem />
                </div>
                <div className="p-3 text-center">
                    <a href="#">
                        <h1 className="hover:underline font-bold text-gray-400">All companies</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}