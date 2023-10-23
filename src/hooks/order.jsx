import {
  createContext,
  useContext,
  useState,
} from 'react';

const OrderContext = createContext({});

function OrderProvider({ children }) {
  const [totalItemsOrder, setTotalItemsOrder] = useState(0);


  return (
    <OrderContext.Provider value={{
      totalItemsOrder,
      setTotalItemsOrder,
    }}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder() {
  const context = useContext(OrderContext);

  return context;
}

export { OrderProvider, useOrder };