// 강제성 
export interface Animal { //클래스 -> 필드 정의  
    species: string;     // 인터 페이스 
    canSpeak: boolean;
    numberOfLegs?: number;
}

const dog: Animal = {
    canSpeak: true;
    species: "강아지";
    numberOfLegs: 4
}
const snake: Animal 