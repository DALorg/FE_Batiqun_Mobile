import { BsFillCartFill } from "react-icons/bs";
import moment from "moment";

const style = {
  eventItem: `flex px-4 py-5 font-medium`,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `text-lg font-semibold text-slate-900`,
  eventPrice: `flex items-center text-slate-900`,
  eventPriceValue: `text-lg`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
};

const EventItem = ({ event }) => {
  return (
    <div className={style.eventItem}>
      <div className={`${style.event} flex-[2]`}>
        <div className={style.eventIcon}>
          <BsFillCartFill />
        </div>
        <div className={style.eventName}>{event.txtStatus}</div>
      </div>
      {event.Value ? <>
        <div className={`${style.eventPrice} flex-[2]`}>
        <i className="fa-brands fa-ethereum"></i>
        <div className={style.eventPriceValue}>&nbsp;{event.Value}</div>
      </div>
      </>
      : <>
      <div className={`${style.eventPrice} flex-[2]`}>
        <div className={style.eventPriceValue}>-</div>
      </div>
      </> }

      <div className={`${style.accent} flex-[3]`}>{event.ethAddress_From}</div>
      <div className={`${style.accent} flex-[3]`}>{event.ethAddress_To}</div>
      <div className={`${style.accent} flex-[2]`}>{moment(event.Tgl_Penjualan).format('MMMM, D Y')}</div>
    </div>
  );
};

export default EventItem;
