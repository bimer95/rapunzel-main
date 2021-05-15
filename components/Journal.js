import JournalItem from "./JournalItem";

export default function Journal() {
    return (
        <div className="flex container flex-col w-full p-3  bg-white mt-3">
            <div className="w-full">
                <div className="pl-3 border-b pb-3">
                    <h1 className="font-bold text-gray-800">Journal</h1>
                </div>
                <div>
                    <JournalItem />
                    <JournalItem />
                    <JournalItem />
                    <JournalItem />
                </div>
                <div className="text-center p-3">
                    <a href="#" className="text-gray-400 font-semibold hover:underline">All articles</a>
                </div>
            </div>
        </div>
    )
}