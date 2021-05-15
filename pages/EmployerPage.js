import CompanyInformation from "../components/CompanyInformation";
import DesignYourJobPost from "../components/DesignYourJobPost";
import JobDetails from "../components/JobDetails";
import TellPosition from "../components/TellPosition";
import Header from "../components/Header";

export default function EmployerPage() {
  return (
    <div className="bg-gray-200">
    <div className="flex flex-grow h-1 w-11/12 mt-1 pl-48 h-1/3 flex-col bg-white mr-3 rounded bg-gray-200 ">
      <Header />
    </div>
    <div className=" container  mx-auto flex justify-center">
      <div className=" w-12/12">
        <div className="container  w-12/12 flex ">
          <div className="flex  flex-grow h-16  w-8/12 mt-0 h-1/3 flex-col bg-white ml-11 rounded bg-gray-200">
           <TellPosition />{/* Опубликовать вакансию */}
              <JobDetails /> {/* Детали вакансии */}
              <DesignYourJobPost />
              <CompanyInformation />{/* Информация компании */}
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}