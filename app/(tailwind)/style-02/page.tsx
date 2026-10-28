// flex 스타일 구성하기
// w-: width
// h-: height
// bg: background-color
export default function page() {
    return (
        <>
            <div 
                className="
                    w-25 h-125 borer border-green-500 flex justify-center items-center gap-1
                "
            >
                                                    {/* bg: 백그라운드 */}
                <div className="w-[101px] h-25 bg-amber-300"></div>
                <div className="w-25.25 h-25 bg-amber-300"></div>
                <div className="w-25.25 h-25 bg-amber-300"></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}