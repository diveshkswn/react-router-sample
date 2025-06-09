import { NavLink, Outlet, useLoaderData } from 'react-router';
import './dashboard.css';
import type { Product } from '../../utils';
export const DashBoardLayout: React.FC<{}> = () => {
  const products = useLoaderData<Product[]>();
  console.log(products);
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <ul className="menu">
          {products.map((_i, index) => {
            return (
              <li key={index}>
                <NavLink to={`/dashboard/${_i.id}`}>{_i.title}</NavLink>
              </li>
            );
          })}
          <li>
            <a href="#">📊 Analytics</a>
          </li>
          <li>
            <a href="#">⚙️ Settings</a>
          </li>
          <li>
            <a href="#">🔒 Logout</a>
          </li>
        </ul>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
