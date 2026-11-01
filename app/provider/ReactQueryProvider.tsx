"use client"

import { QueryClient/*데이터를 저장하고 관리하는 객체*/, QueryClientProvider/**/ } from "@tanstack/react-query";
import { ReactNode/*화면에 들어갈 수 있는 모든 타입*/, useState/*QueryClient를 한법 만들고 유지하기 위해 씀*/ } from "react";

interface ReactQueryProviderProps {
    children: ReactNode
}

export default function ReactQueryProvider({children}: ReactQueryProviderProps) {

    const [queryClient] = useState(() => (
        new QueryClient({ // React Query의 데이터 관리 공간 역할 
            defaultOptions: { //React Query를 사용할 댸 기본으로 적용할 설정
                queries: { // 데이터를 가져오는 요청 
                    staleTime: 1000 * 60 * 5, // 캐싱 5분  (가져온 데이터를 가져오는 요청)
                    refetchOnWindowFocus: false // 윈도우 포커스시 refetching false   (다른창으로 바꿨다가 다시 돌아올 때 자동으로 데이터를 다시 요청지 않갰다는 의미785 )
                }
            }
        })
    ))

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}