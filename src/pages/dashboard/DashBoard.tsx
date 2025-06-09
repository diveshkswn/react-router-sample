import { useLoaderData, useParams } from 'react-router';
import type { Product } from '../../utils';

export const DashBoard: React.FC<{}> = () => {
  const params = useParams<{ userId: string }>();
  const product = useLoaderData<Product>();
  console.log(params);
  return (
    <div className="DashBoard">
      <div className="Product">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} loading="eager" />
      </div>
    </div>
  );
};
