import { createContext, useContext } from "react";
import { State, ProviderProps } from "./types";
import { useContextState } from "./state";

const Context = createContext<State | undefined>(undefined);

export const useBooks = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      "Book value is undefined. Make sure you use the TrademarksProvider before using the context."
    );
  }
  return context;
};

export const BookListProvider: React.FC<ProviderProps> = ({
  children,
  // ...props
}) => {
  const state = useContextState();
  return <Context.Provider {...{ children }} value={state} />;
};
