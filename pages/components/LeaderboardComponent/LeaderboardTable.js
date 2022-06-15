import React from "react";
import "../../../GlobalVariable";
const LeaderboardTable = ({ LeaderboardData, loading, error }) => {
  return (
    <>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nama</th>
            <th className="py-3 px-6 text-center">Item dimiliki</th>
            <th className="py-3 px-6 text-center">Volume Traded</th>
          </tr>
        </thead>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : LeaderboardData.map((leaderboards) => (
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
            ))}
      </table>
    </>
  );
};
export default LeaderboardTable;
