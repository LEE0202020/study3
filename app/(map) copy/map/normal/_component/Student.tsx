interface Student {
    id:number;
    name: string;
    isPresent:  boolean;
}
interface Studentprops {
    student:student;
}

export detault function Student({student};StudentProps) {
    const {id, name, isPresent} = student;

    return (
        
    )
}