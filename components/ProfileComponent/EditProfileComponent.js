import React from "react";
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

const EditProfileComponent = ({ loading, error, profile, bitSuccessEdit }) => {
  const [userEdit, setUserEdit] = useState({
    txtFullName: profile.txtFullName,
    txtEmail: profile.txtEmail,
    txtPassword: profile.txtPassword,
    txtCreatedBy: "profile",
    dtmCreatedDate: "2022-06-05",
    txtUpdatedBy: "profile",
    dtmUpdatedDate: "2022-06-05",
    NIK: profile.NIK,
    Bio: profile.Bio,
    Twitter: profile.Twitter,
    Instagram: profile.Instagram,
    Website: profile.Website,
    file_banner: null,
    file_profile: null,
  });

  const handleChangeEdit = (e) => {
    let data = { ...userEdit };
    data[e.target.name] = e.target.value;
    setUserEdit(data);
  };

  console.log(userEdit);

  const handleFilePP = (e) => {
    let data = { ...userEdit };
    let file = e.target.files[0];
    var extension = file.type;
    var extension_value = extension.replace("image/", ".");
    var blob = file.slice(0, file.size, extension);
    let newFile = new File([blob], "PP" + extension_value, { type: extension });
    data[e.target.name] = newFile;

    setUserEdit(data);
  };

  const handleFileBanner = (e) => {
    let data = { ...userEdit };
    let file = e.target.files[0];
    var extension = file.type;
    var extension_value = extension.replace("image/", ".");
    var blob = file.slice(0, file.size, extension);
    let newFile = new File([blob], "Banner" + extension_value, {
      type: extension,
    });
    data[e.target.name] = newFile;

    setUserEdit(data);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading, Please Wait!",
      html: "I will close in milliseconds.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    let formData = new FormData();
    formData.append("PP", userEdit.file_profile);
    formData.append("Banner", userEdit.file_banner);

    axios({
      url: global.apiurl + "api/user/uploadfile",
      method: "POST",
      data: formData,
    }).then((res) => {
      var NIKS = userEdit.NIK;
      var Fulname = userEdit.txtFullName;
      var mails = userEdit.txtEmail;
      var NIK_phot = userEdit.file;
      var ppss = userEdit.file_profile;
      var banne = userEdit.file_banner;
      var bias = userEdit.Bio;
      var twtr = userEdit.Twitter;
      var we3 = userEdit.Website;
      var insta = userEdit.Instagram;
      var pws = userEdit.txtPassword;
      if (NIK_phot == null) {
        NIK_phot = profile.NIK_Photo;
      }
      if (NIKS == null) {
        NIKS = profile.NIK;
      }
      if (Fulname == null) {
        Fulname = profile.txtFullName;
      }
      if (mails == null) {
        mails = profile.txtEmail;
      }
      if (pws == null) {
        pws = profile.txtPassword;
      }
      if (twtr == null) {
        twtr = profile.Twitter;
      }
      if (bias == null) {
        bias = profile.Bio;
      }
      if (insta == null) {
        insta = profile.Instagram;
      }
      if (we3 == null) {
        we3 = profile.Website;
      }
      if (ppss == null) {
        ppss = profile.Profile_Image;
      } else {
        ppss = res.data.objData.PPimage;
      }
      if (banne == null) {
        banne = profile.Profile_Baner;
      } else {
        banne = res.data.objData.BannerImage;
      }
      dispatch(
        editUser(
          {
            intUserId: profile.encUserId,
            txtFullName: Fulname,
            txtEmail: mails,
            txtUsername: profile.txtUsername,
            txtPassword: pws,
            ethAddress: profile.ethAddress,
            NIK: NIKS,
            NIK_Photo: NIK_phot,
            Profile_Baner: banne,
            Profile_Image: ppss,
            Bio: bias,
            Twitter: twtr,
            Instagram: insta,
            Website: we3,
            txtCreatedBy: "profile",
            dtmCreatedDate: "2022-06-05",
            txtUpdatedBy: "profile",
            dtmUpdatedDate: "2022-06-05",
          },
          Cookies.get("UserData")
        )
      );
    });
  };

  if (bitSuccessEdit == true) {
    Swal.fire(
      "Berhasil Update Profile!",
      "Profile Berhasil di Update",
      "success"
    ).then(function () {
      bitSuccessEdit = null;
    });
  } else if (bitSuccessEdit == false) {
    Swal.fire("Oops...", "Something went wrong!", "error").then(function () {
      bitSuccessEdit = null;
    });
  }
  return (
    <main>
      <section className="pt-16 pb-16">
        <div className="container-fluid py-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="max-w-screen-lg rounded mt-3 overflow-hidden shadow-sm bg-[#fff]">
                <div className="px-6 py-4 grid place-content-center">
                  <div className="font-bold text-xl mb-2">Ubah Foto Profil</div>
                  <img
                    className="rounded-full h-40 w-40 object-center"
                    src="../../user.png"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="form-group">
                    <label className="form-control-label">
                      Upload Foto Profil
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="choose file"
                      name="file_profile"
                      onChange={handleFilePP}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-screen-lg rounded mt-3 overflow-hidden shadow-sm bg-[#fff]">
                <div className="px-6 py-4 grid place-content-center">
                  <div className="font-bold text-xl mb-2 text-center">
                    Ubah Header
                  </div>
                  <img
                    className="rounded-4 h-40 w-80 object-center"
                    src="../../bg.jpg"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="form-group">
                    <label className="form-control-label">Upload Header</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="choose file"
                      name="file_banner"
                      onChange={handleFileBanner}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mt-3">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">Edit profile </h3>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-full-name"
                            >
                              Fullname
                            </label>
                            <input
                              type="input"
                              className="form-control"
                              placeholder="enter your name"
                              name="txtFullName"
                              required
                              onChange={handleChangeEdit}
                              defaultValue={profile.txtFullName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-email"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="enter your email"
                              name="txtEmail"
                              required
                              onChange={handleChangeEdit}
                              defaultValue={profile.txtEmail}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-Password"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="enter password"
                              name="txtPassword"
                              required
                              onChange={handleChangeEdit}
                              defaultValue={profile.txtPassword}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-tokenID"
                            >
                              Eth Address
                            </label>
                            <input
                              type="input"
                              className="form-control"
                              name="ethAddress"
                              onChange={handleChangeEdit}
                              defaultValue={profile.ethAddress}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* <!-- Address --> */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-twitter"
                            >
                              Twitter
                            </label>
                            <input
                              type="input"
                              className="form-control"
                              placeholder="@example"
                              name="Twitter"
                              onChange={handleChangeEdit}
                              defaultValue={profile.Twitter}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-instagram"
                            >
                              Instagram
                            </label>
                            <input
                              type="input"
                              className="form-control"
                              placeholder="@example"
                              name="Instagram"
                              onChange={handleChangeEdit}
                              defaultValue={profile.Instagram}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              forHtml="input-website"
                            >
                              Website
                            </label>
                            <input
                              type="input"
                              className="form-control"
                              placeholder="www.example.id"
                              name="Website"
                              onChange={handleChangeEdit}
                              defaultValue={profile.Website}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-lg-4">
                      <div className="form-group">
                        <label className="form-control-label">About me</label>
                        <textarea
                          type="input"
                          className="form-control"
                          placeholder="write about you"
                          name="Bio"
                          required
                          onChange={handleChangeEdit}
                          defaultValue={profile.Bio}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 text-start">
                        <Link href={{ pathname: "/Profile" }}>
                          <a className="mt-4 text-white bg-[#9b6b43] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-[#9b6b43] dark:hover:bg-[#744c24] dark:focus:ring-blue-800 inline-flex ">
                            Cancel
                          </a>
                        </Link>
                      </div>
                      <div className="col-lg-6 text-end">
                        <button
                          onClick={handleUpdate}
                          className="mt-4 text-white bg-[#9b6b43] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-[#9b6b43] dark:hover:bg-[#744c24] dark:focus:ring-blue-800 inline-flex "
                          type="button"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditProfileComponent;
