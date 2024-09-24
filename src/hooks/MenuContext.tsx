import { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextType {
  menuVisible: boolean;
  statusMobileMenu: (state: boolean) => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  function statusMobileMenu(state: boolean) {
    setMenuVisible(state);
  }

  return (
    <MenuContext.Provider value={{ menuVisible, statusMobileMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
};
