export default function VacancyDescription() {
    return (
        <div className="w-full flex p-5 mt-3 bg-white rounded">
            <div className="vacancy__info w-9/12 ml-3">
                <h1 className="font-bold text-xl text-gray-800 hover:underline my-1">
                    <a href="#">Job Type</a>
                </h1>
                <br />
                <div className="vacancy__info__name">
                    <h1 className="font-bold">Responsibilities:</h1>
                </div>
                <ul>
                    <li>- Service creation;</li>
                    <li>- Creation of personal accounts;</li>
                    <li>- Creating the administrative part of web applications</li>
                </ul>
                <br />
                <div className="vacancy__info__name">
                    <h1 className="font-bold">Requirements:</h1>
                </div>
                <ul>
                    <li>- Experience with React is required;</li>
                    <li>- Knowledge of the Angular2 + framework will be an advantage;</li>
                    <li>- Knowledge of HTML5, CSS3 and SCSS;</li>
                    <li>- Knowledge of JavaScript, TypeScript, WebSocket, Git;</li>
                    <li>- Knowledge of SSR, Next.js, Redux;</li>
                </ul>
                <br />
                <div className="vacancy__info__name">
                    <h1 className="font-bold">Terms:</h1>
                </div>
                <ul>
                    <li>- Decent "white" salary based on the results of the interview;;</li>
                    <li>- Attending specialized conferences and courses at the expense of the company;</li>
                    <li>- Convenient work schedule 5/2, the start time of the working day is discussed.</li>
                </ul>
            </div>
            <div className="vacancy__date ml-6">
                <figure>
                    <div className="flex space-x-1 w-8 h-8 mx-0 ">
                        <img src="face.png " alt="Соцсети" />
                        <img src="gith.png" alt="Соцсети" />
                        <img src="telegram.png" alt="Соцсети" />
                    </div>
                </figure>
            </div>
        </div>
    )
}