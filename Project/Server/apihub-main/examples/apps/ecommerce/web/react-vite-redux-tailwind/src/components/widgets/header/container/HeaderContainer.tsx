import React, { ForwardedRef, useCallback, useEffect, useState } from "react";
import Header from "../presentation/Header";
import useCustomNavigate from "../../../../hooks/useCustomNavigate";
import AuthService from "../../../../services/auth/AuthService";
import ApiError from "../../../../services/ApiError";
import {
  logIn,
  logOut,
  updateLoginCheckDone,
} from "../../../../store/AuthSlice";
import {
  NavigationOption,
  ROUTE_PATHS,
  QUERY_PARAMS,
} from "../../../../constants";
import { getNavigationItemList } from "../../../../data/applicationData";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { getUserCartThunk, resetCartSlice } from "../../../../store/CartSlice";
import { createSearchParams } from "react-router-dom";

const HeaderContainer = React.forwardRef(function HeaderContainer(
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  const navigate = useCustomNavigate();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const userCart = useAppSelector((state) => state.cart.userCart);

  const [navigationList, setNavigationList] = useState<NavigationOption[]>([]);

  /* Navigate to /, on click of logo*/
  const logoClickHandler = () => {
    navigate("/");
  };

  /* On click of cart */
  const cartClickHandler = () => {
    navigate(ROUTE_PATHS.cart);
  };

  const fetchUser = useCallback(async () => {
    /* Get current user info */
    const response = await AuthService.getCurrentUser();

    /* If the user details are returned */
    if (!(response instanceof ApiError)) {
      /* Login and store the user details */
      dispatch(logIn(response));
    } else {
      /* Logout */
      dispatch(logOut());
    }

    /* Is logged in check is done */
    dispatch(updateLoginCheckDone(true));
  }, [dispatch]);

  /* Navigate to /product-search?productNameSearch=<inputText> */
  const searchHandler = (inputText: string) => {
    if (inputText) {
      navigate({
        pathname: ROUTE_PATHS.productSearch,
        search: createSearchParams({
          [QUERY_PARAMS.productNameSearch]: inputText,
        }).toString(),
      });
    }
  };

  /* Fetch Current User: To determine login status */
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  /* Fetch Users' Cart, when isLoggedIn flag changes in redux */
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserCartThunk());
    } else {
      /* Reset Cart Slice as user is logged out */
      dispatch(resetCartSlice());
    }
  }, [dispatch, isLoggedIn]);

  /* Get Navigation Item List based on isLoggedIn flag */
  useEffect(() => {
    setNavigationList(getNavigationItemList(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Header
      ref={ref}
      logoClickHandler={logoClickHandler}
      navItemList={navigationList}
      itemsInCart={userCart ? userCart.items.length : 0}
      cartClickHandler={cartClickHandler}
      searchHandler={searchHandler}
    />
  );
});
export default HeaderContainer;
