import React from 'react'
import { createContext,useContext } from 'react'

interface ShopContextType {
    backendUrl: string;
}
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
    children: React.ReactNode;
}
const ShopContextProvider:React.FC <ShopContextProviderProps> = (props)=> {


    const backendUrl = 'https://mentorship-backend-st4p.onrender.com';
    const Value: ShopContextType = {
        backendUrl,
    };
  return (
    <ShopContext.Provider value={Value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export const useShopContext = () => {
    
    return useContext(ShopContext);
}
export default ShopContextProvider;