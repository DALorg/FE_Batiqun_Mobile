import React from "react";
import { useDispatch } from "react-redux";
import "../../GlobalVariable";
import Link from "next/link";

const UserLists = ({ UserData, loading, error }) => {
  console.log(UserData);
  return (
    <>
      <section className="container section section-profile" id="leaderboards">
        <h2 className="section__title">Pengguna</h2>
        <div className="items">
          {loading ? (
            <div className="flex items-center p-24 justify-center space-x-2">
              <div
                className="spinner-grow inline-block w-40 h-40 bg-current rounded-full opacity-0"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            error.message
          ) : (
            UserData.map((usr) => (
              <>
                <div className="wrapper-user">
                  <div className="card-user">
                    <div className="card-head-user">
                      {usr.Profile_Image ? (
                        <img
                          src={global.DataUrl + usr.Profile_Image}
                          alt=""
                          width="300"
                          height="250"
                        />
                      ) : (
                        <img
                          src="/vercel.svg"
                          alt=""
                          width="300"
                          height="250"
                        />
                      )}
                    </div>
                    <div className="card-body-user mt-3">
                      <h4 className="user-name font-bold">
                        <Link
                          href={{
                            pathname: "/Profile/[profilid]",
                            query: { profilid: usr.ethAddress },
                          }}
                        >
                          <a>
                            {usr.Profile_Image ? usr.txtFullName : "Unnamed"}
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default UserLists;
