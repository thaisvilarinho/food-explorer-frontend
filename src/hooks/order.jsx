import { createContext, useContext, useState, useEffect } from 'react';

import { useAuth } from './auth'

const OrderContext = createContext({});

function OrderProvider({ children }) {
  const { user } = useAuth();
  const orderKey = `@foodexplorer:order_${user.id}`;
  const [totalItemsOrder, setTotalItemsOrder] = useState(
    parseInt(localStorage.getItem(orderKey), 10) || 0
  );

  useEffect(() => {
    localStorage.setItem(orderKey, totalItemsOrder.toString());
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
