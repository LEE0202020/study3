import { deflate } from "zlib";
import {create} from "zustand";
import { combine, persist } from "zustand/middleware";

const useCountStore = create(
    persist(
        combine(
            {
                count: 0, // key값이 있으니까 밑에는 수정 
            },
            (set) => ({ /*리턴값*/               /*소괄호 안에있는 값은 리턴값*/   
                increase: () => set((state) => ({ count: state.count + 1 })),
                decrease: () => set((state) => ({ count: state.count - 1 })),
                addCount: (payload:number) => set((state) => ({count: state.count + payload})),
                subtractCount: (payload:number) => set((state) => ({count: state.count - payload})),
            })
        ),
        {
            name: "count-storage", // 로컬스토리지에 저장될 때의 key값
        } // persist 옵션
    )

)

export default useCountStore;