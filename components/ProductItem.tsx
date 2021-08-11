import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong> {product.price} </strong>
      <button onClick={() => onAddToWishList(product.id)}>favoritar</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

// when should I use memo?
// - Pure functional components;
// - components rendering too often;
// - Re-renders with same props
// - Components medium to big size
