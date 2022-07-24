import Head from "next/head";
import Link from "next/link";
import { Button } from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { editUser, getUsers } from "../../redux/action/profileAction";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import "../../GlobalVariable";
import Header from "../../components/Header";
import EditProfileComponent from "../../components/ProfileComponent/EditProfileComponent";

const EditProfile = () => {
  const dispatch = useDispatch();
  const allProfileData = useSelector((state) => state.Profiles);
  const { loading, error, profile, bitSuccessEdit } = allProfileData;
  useEffect(() => {
    dispatch(getUsers(Cookies.get("ethAddress"), Cookies.get("UserData")));
  }, []);
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>
      <Header />
      <EditProfileComponent
        loading={loading}
        error={error}
        bitSuccessEdit={bitSuccessEdit}
        profile={profile}
      />
    </div>
  );
};
export default EditProfile;
