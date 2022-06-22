import React from "react";
import "../../GlobalVariable";
const LeaderboardTable = ({ LeaderboardData, loading, error }) => {
  return (
    <>
      <table className="min-w-max w-full max-w-screen table-fixed overflow-x-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nama</th>
            <th className="py-3 px-6 text-center">Item dimiliki</th>
            <th className="py-3 px-6 text-center">Volume Transaksi</th>
          </tr>
        </thead>
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
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
          LeaderboardData.map((leaderboards) => (
            <>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src={global.DataUrl + leaderboards.ProfileImage}
                        />
                      </div>
                      <span>{leaderboards.FullName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <div className="flex items-center justify-center">
                      <span>{leaderboards.TotalItems}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-right">
                    <div className="flex justify-center">
                      <i className="fa-brands fa-ethereum m-1" />
                      <span className="text-center font-semibold">
                        {leaderboards.VolumeTraded}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </>
          ))
        )}
      </table>
    </>
  );
};
export default LeaderboardTable;
