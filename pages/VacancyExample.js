import SimilarVacancies from "../components/SimilarVacancies";
import VacancyDescription from "../components/VacancyDescription";
import VacancyResponse from "../components/VacancyResponse";
import VacancyTerms from "../components/VacancyTerms";
import Header from "../components/Header";

export default function VacancyExample() {
  return (
    <div className="bg-gray-200">
    <div className=" container mx-auto w-9/12 flex justify-center">
      <div className="max-w-screen-lg">
        <Header />
        <div className="container w-full flex ">
          <div className="flex container w-9/12 mt-3  flex-col bg-white mr-5 rounded bg-gray-200">
            <VacancyTerms /> {/* Информация */}
              <VacancyDescription /> {/* Тип задания */}
              <VacancyResponse /> {/* Ввод данных */}
            </div>
            <div className="">
              <SimilarVacancies /> {/* Пример вакансии */}
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}