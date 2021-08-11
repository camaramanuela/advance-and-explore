export interface AddProductToWishListPros {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onRequestClose
}: AddProductToWishListPros) {
  return (
    <span>
      Deseja adicionar aos favoritos?
        <button onClick={onAddToWishList}>Sim</button>
        <button onClick={onRequestClose}>Não</button>
    </span>
  );
}