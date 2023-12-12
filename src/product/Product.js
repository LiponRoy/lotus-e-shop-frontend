import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import Spinner from "../components/Spinner";
import {
  GET_PRICE_RANGE,
  productsFetch,
} from "../features/products/ProductSlice";
import { addToCart } from "../features/cart/cartSlice";
import { GrCart } from "react-icons/gr";
import Search from "../components/search/Search";
import {
  FILTER_BY_SEARCH,
  FILTER_BY_SORT,
} from "../features/filter/filterSlice";
import FilterByCategory from "../components/filterByCategory/FilterByCategory";
import Pagination from "../components/pagination/Pagination";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataAll, isLoading, isError, message } = useSelector(
    (state) => state.productRedux
  );
  const { filteredProducts } = useSelector((state) => state.filterS);

  // for search item
  const [searchProduct, setSearchProduct] = useState("");
  const [sort, setSort] = useState("latest");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Pagination end

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(GET_PRICE_RANGE({ dataAll }));
  }, []);

  useEffect(() => {
    dispatch(FILTER_BY_SORT({ dataAll, sort }));
  }, [dispatch, dataAll, sort]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ dataAll, searchProduct }));
  }, [dispatch, dataAll, searchProduct]);

  // add to cart
  const addToCartItem = (product) => {
    // if (user) {

    // } else {
    // 	navigate('/login');
    // }
    dispatch(addToCart(product));

    // navigate('/cartDetaials');
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className=" mx-80">
        <div className=" w-full flex flex-col md:flex-row justify-between   items-center my-4">
          <div className="basis-[50%]  flex justify-start my-4">
          <FilterByCategory />
          </div>
          <div className="basis-[50%] ">
          <Search
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProducts?.map((value, i) => (
            <div className=" flex flex-col justify-center items-center border-2 p-2 rounded-md" key={i}>
              <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs rounded-sm">
                {value?.image && (
                  <img
                    src={value.image.url}
                    width={300}
                    className="hover:scale-110 transition duration-300 ease-in-out"
                    alt="noImg"
                  />
                )}
              </div>
              <div className="w-[80%] md:w-full flex justify-between items-center mt-4 bg-[#646464] text-white p-2">
                <button
                  onClick={() => navigate(`/productDetail/${value?._id}`)}
                  className=" "
                >
                  {/* <BsFillBasket2Fill size='24px'></BsFillBasket2Fill> */}
                  Detail
                </button>

                <button
                  onClick={() => addToCartItem(value)}
                  className="flex items-center"
                >
                  <div className=" flex justify-center items-center gap-x-1">
                  <span className=" text-sm">Add-To-Cart</span>
                  <GrCart size='22px'/>
                  </div>
                  
                </button>
              </div>

              <span className="text-xl mt-2 font-semibold  ">
                {value?.price}
                <span className="text-xl ml-1 ">TK</span>
              </span>
              <p className="text-base font-medium capitalize">{value?.name}</p>
            </div>
          ))}
        </div>
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </>
  );
};

export default Product;
