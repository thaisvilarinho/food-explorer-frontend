import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { Details } from '../pages/Details';
import { NotFound } from '../pages/NotFound';


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newDish" element={<Dish isNew={true} />} />
      <Route path="/dish/:id" element={<Dish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}