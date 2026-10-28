import {useState } form "reate"

export deault function page() {
    // 사용자가 입력한 key가 Enter라면 
    // 사용자가 입력한 글자를 화면에 p태그에 출력하기 
    const [name, setName] = useState("")
    const handleNameChange = (e: Reate.changeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    return (
        <>
            <div>
                <span>이름</span>
                < input
                    className="border border-gray-600 rounded-lg"
                    type="text"
                    placeholder="이름을 입력하새요"
                    onChange={handleName}/>
            </div>
            <p>{name}</p>
        </>
    )
}
