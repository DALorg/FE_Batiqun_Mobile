import { CgArrowsExchangeV } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { dummyEvents } from "../../static/dummyEvents";
import EventItem from "./itemActivity/EventItem";

const style = {
  wrapper: `w-full mt-8 mb-16 border border-[#151b22] rounded-xl bg-[#eaeaeb] overflow-hidden`,
  title: `bg-[#eaeaeb] text-slate-900 px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
  filter: `flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840]`,
  filterTitle: `flex-1`,
  tableHeader: `flex min-w-max sticky w-full max-w-screen bg-[#eaeaeb] text-slate-900 border-y mt-8 px-4 py-1`,
  eventItem: `flex px-4`,
  ethLogo: `h-5 mr-2`,
  accent: `text-slate-900`,
  activityTable: `overflow-x-auto flex flex-col max-h-80 w-full`,
};

const ItemActivity = ({ PA }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={style.wrapper}>
      <div className={style.title} onClick={() => setToggle(!toggle)}>
        <div className={style.titleLeft}>
          <span className={style.titleIcon}>
            <CgArrowsExchangeV />
          </span>
          Aktivitas NFT
        </div>
        <div className={style.titleRight}>
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {toggle && (
        <div className={style.activityTable}>
          <div className={style.tableHeader}>
            <div
              className={`${style.tableHeaderElement} grow shrink-0 basis-24`}
            >
              Event
            </div>
            <div
              className={`${style.tableHeaderElement} grow shrink-0 basis-24`}
            >
              Harga
            </div>
            <div
              className={`${style.tableHeaderElement} grow shrink-0 basis-24`}
            >
              Dari
            </div>
            <div
              className={`${style.tableHeaderElement} grow shrink-0 basis-24`}
            >
              Penerima
            </div>
            <div
              className={`${style.tableHeaderElement} grow shrink-0 basis-24`}
            >
              Tanggal
            </div>
          </div>
          {PA.Product_Activities?.map((event, id) => (
            <EventItem key={id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemActivity;
