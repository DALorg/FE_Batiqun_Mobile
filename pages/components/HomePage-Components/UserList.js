import React from "react";
import { useDispatch } from "react-redux";
import "../../../GlobalVariable";

const UserLists = ({ UserData, loading, error }) => {
  return (
    <>
      <section className="container section" id="leaderboards">
        <h2 className="section__title">Pengguna</h2>
        <div className="items">
          {loading
            ? "Loading..."
            : error
            ? error.message
            : UserData.map((usr) => (
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
                      <div className="card-body-user">
                        <h4 className="user-name">
                          <a href="">
                            {usr.Profile_Image ? usr.txtFullName : "Unnamed"}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </>
              ))}
        </div>
      </section>
    </>
  );
};

export default UserLists;
