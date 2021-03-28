export default function RandomVacancy(){
    return(
        // <div className="container mx-auto text-2x1">
        //     <div className="randomVacancyBanner text-2x1">
        //         <h1 className="text-2xl">Hello</h1>
        //     </div>
        // </div>
        <div className="container w-full bg-white">  
                <div className="flex flex-col py-4 pl-4" >
                    <div className="flex flex-row">
                        <div className="w-3/4 border-r-2">
                            <div className=" mb-3">
                                <h1 className="text-xl font-bold ">Ведущий PHP разработчик (Удаленно)</h1>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-400">Москва</span>
                                <span className="mx-1 text-gray-400">&#8226;</span>
                                <span className="text-gray-400">Полный рабочий день</span>
                                <span className="mx-1 text-gray-400">&#8226;</span>
                                <span className="text-gray-400">Можно удалённо</span>
                            </div>
                            <div className="mb-5">
                                <div>
                                    <div className="pr-2 overflow-hidden h-20">
                                        <span className="text-sm overflow-clip"> Злые марсиане ищут аккаунт-менеджера на полную занятость в распределенную команду (удаленная работа). Напишите нам, если:   Вы хотите работать из любой точки страны или мира: Злые марсиане работают распределенно со дня основания и знают, как выстраивать асинхронные процессы в команде. Вы готовы помогать глобальным проектам и стартапам на стадиях пивота (поиска масштабируемой бизнес-модели) или...</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="bg-green-500 hover:bg-green-400 active:bg-green-600 focus:outline-none text-white rounded p-2 font-bold">От 2 000 до 4 000 $</button>
                            </div>
                        </div>
                        <div className="w-1/4 flex items-center flex-col">
                            <div className="w-28 h-28">
                                <a href="#">
                                    <img src="1.png"/>
                                </a>
                            </div>
                            <div className="mt-2 w-full text-center">
                                <a className="font-bold text-lg text-gray-700 hover:underline" href="#">Evil Martinias</a>
                            </div>
                            <div className="mt-1 w-full text-center">
                                <a className="font-bold text-blue-600 hover:underline" href="https:\\www.evilmartians.com">evilmartians.com</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}