interface ChildrenComponentProps {
    // children : 컴포넌트로 감싸진 하뉘 태그들 
    children: React.ReactNode
}

// 타입을 수정하고, 각 컬러를 p태그로 출력하기 
export dafault function ChildrenComponemt({children}: ChildrenComponentProps) {
    console.log(children)

    return (
        <>
            {children}
        </>
    );
}
