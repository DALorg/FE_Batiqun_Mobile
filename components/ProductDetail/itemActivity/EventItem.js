import { BsFillCartFill } from "react-icons/bs";
import moment from "moment";
import Link from "next/link";

const style = {
  eventItem: `flex px-4 py-5 lg:font-medium sm:font-thin `,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `sm:text-xs lg:text-lg font-semibold text-slate-900`,
  eventPrice: `flex items-center text-slate-900 sm:text-sm lg:text-lg`,
  eventPriceValue: `text-lg`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
};

const EventItem = ({ event }) => {
  return (
    <div className={style.eventItem}>
      <div className={`${style.event} grow shrink-0 basis-24`}>
        <div className={style.eventName}>{event.txtStatus}</div>
      </div>
      {event.Value ? (
        <>
          <div className={`${style.eventPrice} grow shrink-0 basis-24`}>
            <i className="fa-brands fa-ethereum"></i>
            <div className={style.eventPriceValue}>&nbsp;{event.Value}</div>
          </div>
        </>
      ) : (
        <>
          <div className={`${style.eventPrice} grow shrink-0 basis-24`}>
            <div className={style.eventPriceValue}>-</div>
          </div>
        </>
      )}

      <div className={`${style.accent} grow shrink-0 basis-24`}>
        <Link
          href={{
            pathname: "/Profile/[profilid]",
            query: { profilid: event.ethAddress_From },
          }}
        >
          {event.ethAddress_From?.substring(0, 2) +
            "..." +
            event.ethAddress_From?.substring(event.ethAddress_From?.length - 2)}
        </Link>
      </div>
      <div className={`${style.accent} grow shrink-0 basis-24`}>
        <Link
          href={{
            pathname: "/Profile/[profilid]",
            query: { profilid: event.ethAddress_To },
          }}
        >
          {event.ethAddress_To?.substring(0, 2) +
            "..." +
            event.ethAddress_To?.substring(event.ethAddress_To?.length - 2)}
        </Link>
      </div>
      <div className={`${style.accent} grow shrink-0 basis-24`}>
        {moment(event.Tgl_Penjualan).format("MMMM, D Y")}
      </div>
    </div>
  );
};

export default EventItem;
