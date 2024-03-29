import React from "react";
import axios from "axios";
import ProductCard from "../../components/Product-Components/ProductCard";

import { useRouter } from "next/router";

const style = {
  bannerImageContainer: `h-64 w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-black`,
  endRow: `w-full flex justify-end text-black`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-xl mb-[-2rem]`,
  socialIconsWrapper: `w-24 lg:w-40 -mt-16`,
  socialIconsContent: `flex container justify-around sm:text-sm lg:text-[1.4rem] border-2 rounded-xl px-2`,
  socialIcon: `my-2 cursor-pointer`,
  divider: `border-r-2`,
  title: `text-2xl lg:text-5xl font-bold mb-4`,
  createdBy: `text-sm font-light mb-4`,
  statsContainer: `w-[78vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-xl sm:text-sm xs:text-xs lg:text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-[10px] w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const ProfileComponent = ({
  loading,
  error,
  profile,
  isCreated,
  isFav,
  isSold,
  Page,
}) => {
  console.log(profile);
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.replace("/Login");
  }

  const router = useRouter();
  function logoff() {
    deleteAllCookies();
    logout();
  }
  return (
    <>
      <main>
        <div className={style.bannerImageContainer}>
          <img
            className={style.bannerImage}
            src={global.DataUrl + profile.Profile_Baner}
            alt="banner"
          />
        </div>
        <div className={style.infoContainer}>
          <div className={style.midRow}>
            <img
              className={style.profileImg}
              src={global.DataUrl + profile.Profile_Image}
              alt="profile image"
            />
          </div>
          <div className={style.endRow}>
            <div className={style.socialIconsContainer}>
              <div className={style.socialIconsWrapper}>
                <div className={style.socialIconsContent}>
                  <div className={style.socialIcon}>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className={style.divider} />
                  <div className={style.socialIcon}>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className={style.divider} />
                  <a
                    onClick={() => {
                      router.push({
                        pathname: "./Profile/EditProfile",
                      });
                    }}
                    href="javascript:;"
                  >
                    <div className={style.socialIcon}>
                      <i className="fa-solid fa-gear"></i>
                    </div>
                  </a>
                  <div className={style.divider} />
                  <a onClick={logoff}>
                    <div className={style.socialIcon}>
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.midRow}>
            <div className={style.title}>{profile.txtFullName}</div>
          </div>
          <div className={style.midRow}>
            <div className={style.createdBy}>
              <i className="fa-brands fa-ethereum" />
              &nbsp;{profile.ethAddress}
            </div>
          </div>
          <div className={style.midRow}>
            <div className={style.statsContainer}>
              <div className={style.collectionStat}>
                <div className={style.statValue}>{profile.TotalCreated}</div>
                <div className={style.statName}>Dibuat</div>
              </div>
              <div className={style.collectionStat}>
                <div className={style.statValue}>
                  {profile.TotalCollections}
                </div>
                <div className={style.statName}>Dimiliki</div>
              </div>
              <div className={style.collectionStat}>
                <div className={style.statValue}>{profile.TotalFavorite}</div>
                <div className={style.statName}>Favorit</div>
              </div>
              <div className={style.collectionStat}>
                <div className={style.statValue}>
                  <i className="fa-brands fa-ethereum"></i>
                  {profile.VolumeTraded?.toString().substr(0, 3) + "K"}
                </div>
                <div className={style.statName}>Pendapatan</div>
              </div>
            </div>
          </div>
          <div className={`${style.midRow} pb-16`}>
            <div className="w-full mx-auto mt-4 rounded">
              <ul
                id="tabs"
                className="overflow-x-auto flex w-full px-2 pt-2 pb-4 border-b-2"
              >
                <li className="px-4 py-2 -mb-px font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    id="default-tab"
                    href="./Profile"
                    className={
                      !isCreated && !isFav & !isSold
                        ? "nav__link active-link"
                        : "link"
                    }
                  >
                    Koleksi
                  </a>
                </li>
                <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    href="./Profile?isCreated=true"
                    className={isCreated ? "nav__link active-link" : "link"}
                  >
                    Dibuat
                  </a>
                </li>
                <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    href="./Profile?isFav=true"
                    className={isFav ? "nav__link active-link" : "link"}
                  >
                    Favorit
                  </a>
                </li>
                <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    href="./Profile?isSold=true"
                    className={isSold ? "nav__link active-link" : "link"}
                  >
                    Terjual
                  </a>
                </li>
              </ul>

              <div id="tab-contents">
                <div id="collected" className="p-8">
                  <div className="row padding-card">
                    <ProductCard
                      ProductData={profile.Products}
                      loading={loading}
                      error={error}
                      isFav={isFav}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileComponent;
