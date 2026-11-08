
interface ChildrenComponentPtops {
    // Children: 컴포넌트로 감싸진 하위 태그들 
    children : React.ReactNode
    colors: {
        blue: string;
        red: string;
        green: string;
    }
}

export default function ChildrenComponent({colors, children}: ChildrenComponentPtops) {
    const {blue, green, red} = colors
    console.log(children)

    return (
        <>
            {children}
            <p style={{color:colors.blue}}>자식 태그</p>

        </>
    );
}