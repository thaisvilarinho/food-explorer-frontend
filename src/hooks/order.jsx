import { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext({});

function OrderProvider({ children }) {
  const [totalItemsOrder, setTotalItemsOrder] = useState(
    parseInt(localStorage.getItem('@foodexplorer:order'), 10) || 0
  );

  useEffect(() => {
    localStorage.setItem('@foodexplorer:order', totalItemsOrder.toString());
  }, [totalItemsOrder]);

  return (
    <OrderContext.Provider value={{
      totalItemsOrder,
      setTotalItemsOrder,
    }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);

  return context;
}

export { OrderProvider, useOrder };
