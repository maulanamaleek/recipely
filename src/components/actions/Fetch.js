import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "./index";

// const API_KEY = "4f2a5b50efbe4ca1bbb69c1181d6c837";

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch(
      "https://api.spoonacular.com/recipes/random?number=20&apiKey=4f2a5b50efbe4ca1bbb69c1181d6c837"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res.recipes);
        dispatch(fetchProductsSuccess(res.recipes));
        return res.recipes;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
