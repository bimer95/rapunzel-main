import {priceJobPost} from "../util/EmployerPage/priceJobPost"
export default function DesignYourJobPost() {
    return (
        <div className="bg-gray-200 h-screen-full flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white mt-4 p-8 shadow-xl ">
                <div className="text-2xl font-bold text-center mb-6 ">
                    <h1>DESIGN YOUR JOB POST</h1>
                </div>
                <div className="border-b-2"></div>
                <div className="fieldOfActivity__checkboxes mt-3">
                    <div className="">
                        <input id={'jobPost'} type="checkbox" className="transform  scale-150 m-2" data-price={'0.00084'} data-currency={'1'} onChange={priceJobPost} />&nbsp;{/* checkbox */}
                        <label>Show my company logo besides my post (0.00084₿)</label>
                        {/* <button className="mt-1 w-15 h-8 bg-whit-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-red rounded p-1 font-bold text-xs ring-4 ring-red-500">2X MORE VIEWS </button>
                            <button className="mt-1 w-15 h-8 bg-gray-400 hover:opacity-70 active:bg-gray-600 focus:outline-none text-white rounded p-1 font-bold text-xs ">Add Logo </button> */}
                    </div>
                    <div>
                        <input id={'jobPost'} type="checkbox" className="transform scale-150 m-2" data-price={'0.00084'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label>Email blast my job post to 91,805 remote candidates(0.00084₿)</label>
                    </div>

                    <div>
                        <input id={'jobPost'} type="checkbox" className="transform scale-150 m-2" data-price={'0.01'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label>Get matched with suitable applicants from our  (7,560 remote workers) </label>
                    </div>

                    <div>
                        <input id={'jobPost'} type="checkbox"  className="transform scale-150 m-2" data-price={'0.027'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label>Highlight your post in yellow(0.00084₿)</label>
                    </div>
                    <div>
                        <input id={'jobPost'} type="checkbox"  className="transform scale-150 m-2" data-price={'0.0042'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label>Highlight with yuor company's brand color(0.0042₿)</label>
                    </div>

                    <div className="">
                        <input id={'jobPost'} type="checkbox" className="transform scale-150 m-2" data-price={'0.0034'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label className="">Sticky your post so it stays on top of the frontpage for 24 hours(0.0034₿)</label>
                    </div>

                    <div>
                        <input id={'jobPost'} type="checkbox" className="transform scale-150 m-2" data-price={'0.0077'} data-currency={'1'} onChange={priceJobPost} />&nbsp;
                            <label>Sticky your post so it stays on top of the frontpage for 1 entire week(0.0077₿)</label>
                    </div>

                    <div>
                        <input id={'jobPost'} type="checkbox" className="transform scale-150 m-2" data-price={'0.0232'} data-currency={'1'} onChange={priceJobPost}/>&nbsp;
                            <label>Sticky your post so it stays on top of the frontpage for 1 entire month(0.0232₿)</label>
                    </div>
                </div>
            </div>
        </div>
    )
}