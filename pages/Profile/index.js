import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { requireLogin } from "../../AuthVerification/requireLogin";
import { useMoralis } from "react-moralis";
import { getProfile, getUsers } from "../../redux/action/profileAction";
import ProductCard from "../../components/Product-Components/ProductCard";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import "../../GlobalVariable";
import Header from "../../components/Header";
import ProfileComponents from "../../components/ProfileComponent/Profile";
// import "../js/main.js";
//abcde

export default function Profile() {
  const dispatch = useDispatch();
  const allProfileData = useSelector((state) => state.Profiles);
  const { loading, error, profile } = allProfileData;
  const { logout } = useMoralis();
  const router = useRouter();
  const { isCreated, isFav, Page } = router.query;
  var created = false;
  var favorite = false;
  var Pagess = 0;
  var TotalDisplayed = 4;
  if (isCreated) {
    created = true;
  }
  if (isFav) {
    favorite = true;
  }
  if (Page == null) {
    Pagess = 1;
  } else {
    Pagess = Page;
  }
  // LOAD DATA
  useEffect(() => {
    dispatch(
      getProfile(
        Cookies.get("ethAddress"),
        Cookies.get("ethAddress"),
        Cookies.get("UserData"),
        created,
        favorite,
        Pagess,
        TotalDisplayed
      )
    );
  }, []);
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProfileComponents
        loading={loading}
        error={error}
        profile={profile}
        isCreated={isCreated}
        isFav={isFav}
        Page={Page}
      />
    </div>
  );
}
export const getServerSideProps = requireLogin((context) => {
  const { req, res } = context;
  const token = req.cookies.ethAddress;
  console.log(token);
  return { props: {} };
});
