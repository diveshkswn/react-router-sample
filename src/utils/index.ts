export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  categorgy: string;
  image: 'string';
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

export const fetchProductsById = async (id: number): Promise<Product> => {
  const response = await fetch('https://fakestoreapi.com/products/' + id);
  const data = await response.json();
  return data;
};
