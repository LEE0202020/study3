// 사용자가 입력한 색깔을 이용하여 폰트 색상 변경하기
// 블루 -> blue
// blue
export default function page() {
    return (
        <>
            <h1>색상 적용 대상!😎</h1>
            <div>
                <span>색상:</span>
                <input 
                    className="border border-gray-600 rounded-lg" 
                    type="text"
                    placeholder="색상을 입력하세요."
                />
            </div>
        </>
    );
}