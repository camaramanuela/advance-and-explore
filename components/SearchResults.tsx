import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])
  

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem 
            key={product.id}
            product={product} 
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}


// When should I use useMemo?
// in variables
// a lot of calcs
// repass the info to a child component (iqualdade referencial)

// when shoul I use useCallback?
// in functions