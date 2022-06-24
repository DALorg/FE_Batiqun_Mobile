import react from "react";
import { useMoralis, useMoralisFile, useWeb3Transfer } from "react-moralis";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import { BuyProduct } from "../../redux/action/productAction";
import Web3 from "web3";
import Swal from "sweetalert2";
import { IoMdWallet } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import { useState } from "react";

const web3 = new Web3(Web3.givenProvider)

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
};

const BuyButton = ({ product }) => {

    const [txs, setTxs] = useState({});
    const dispatch = useDispatch();
    const currentUser = Cookies.get("ethAddress");

    var myArray = ['0xcdB694534669134902702d0545E1Ad2213c1408d', '0x6Cb58a6F26e0128b9F716Ef1D7F8d6707377Df39'];    
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];

    let timerInterval;

    const Transfer = async (e) =>{
      e.preventDefault();
      try {
        Swal.fire({
          title: 'Loading, Please Wait!',
          html: 'I will close in <b></b> milliseconds.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
        await startPayment().then(async function(result) {
          await dispatch(BuyProduct({
            Product_ActivityID: "7Tk$K9N2nJIPW1BkBiCjpA__",
            ProductId: product.encProductId,
            ethAddress_To: product.ethAddress,
            ethAddress_From: currentUser,
            Tgl_Penjualan: "2021-09-23",
            Value: product.Harga,
            TransactionHash: result.hash,
            bitComplete:true,
            bitSent: true
      },Cookies.get("UserData")))
      Swal.fire(
        "Congratulations!",
        "Your have bought this Product!",
        "success"
      )
    }).catch(function(error) {      
      console.log(error);
      Swal.fire(
        "Oops...",
        error.toString(),
        "error"
    )
      }
    );
      } catch (error){
        console.log(error)
      }
    }

    const startPayment = async () => {
      try{
        if(!window.ethereum){

        }
        await window.ethereum.send("eth_requestAccounts");
        const providers = new ethers.providers.Web3Provider(window.ethereum);
        const signer = providers.getSigner();
        ethers.utils.getAddress(randomElement);
        const tx = await signer.sendTransaction({
          to: randomElement,
          value: String((product.Harga * 1000000000000000000) + 500000000000000)
        });
        return tx;
      }catch{

      }
    }

  return (
    <div className="flex h-20 items-center rounded-lg border border-[#151c22] bg-[#eaeaeb] px-12 justify-center items-end">
    <Toaster position="bottom-left" reverseOrder={false} />

    <div
      onClick={Transfer}
      className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff] content-end`}
    >
      <IoMdWallet className={style.buttonIcon} />
      <div className={style.buttonText}>Buy Now</div>
    </div>
    {/* <div
      className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
    >
      <HiTag className={style.buttonIcon} />
      <div className={style.buttonText}>Make Offer</div>
    </div> */}
    {/* <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
        <IoMdWallet className={style.buttonIcon} />
        <div className={style.buttonText}>List Item</div>
      </div> */}
  </div>
  );
};

export default BuyButton;
