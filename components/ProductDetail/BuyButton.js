import react from "react";
import { useMoralis, useMoralisFile, useWeb3Transfer } from "react-moralis";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { BuyProduct } from "../../redux/action/productAction";
import Web3 from "web3";
import Swal from "sweetalert2";
import { IoMdWallet } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import { useState } from "react";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
//
const web3 = new Web3(Web3.givenProvider);

const style = {
  button: `flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl text-white`,
  buttonText: `ml-2 text-lg font-semibold text-[#fff]`,
};

const BuyButton = ({ product }) => {
  const dispatch = useDispatch();

  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal, // Required
  });

  const { chainId, accounts } = connector;

  const [userEdit, setUserEdit] = useState({
    ProductId: product.encProductId,
    ethAddress_To: product.ethAddress,
    Harga: product.Harga,
    User: accounts[0],
  });

  var myArray = [
    "0xcdB694534669134902702d0545E1Ad2213c1408d",
    "0x6Cb58a6F26e0128b9F716Ef1D7F8d6707377Df39",
  ];
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];

  const testSendTransaction = async () => {
    const address = null;
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    address = accounts[0];
    setUserEdit({
      ProductId: product.encProductId,
      ethAddress_To: product.ethAddress,
      Harga: product.Harga,
      User: address,
    });
    // Draft transaction
    const tx = {
      from: address, // Required
      to: randomElement, // Required (for non contract deployments)
      data: "0x", // Required
      value: String(product.Harga * 1000000000000000000 + 500000000000000), // Optional
    };
    // Send transaction
    const res = await connector.sendTransaction(tx).catch((error) => {
      // Error returned when rejected
      console.error(error);
    });

    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    var myArray = ['0xcdB694534669134902702d0545E1Ad2213c1408d', '0x6Cb58a6F26e0128b9F716Ef1D7F8d6707377Df39'];    
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  
    const testSendTransaction = async () => {
      const address = null;
      if (!connector.connected) {
        // create new session
        await connector.createSession();
      }

      address = accounts[0];
      setCookie("ethAddress", address, 3);
            // Draft transaction
      const tx = {
        from: address, // Required
        to: randomElement, // Required (for non contract deployments)
        data: "0x", // Required
        value: String((product.Harga * 1000000000000000000) + 500000000000000), // Optional
      };
      // Send transaction
      const res = await connector
        .sendTransaction(tx)
        .catch(error => {
          // Error returned when rejected
          console.error(error);
        });

        return res;
    };

    const Transfer = async (e) =>{
      e.preventDefault();
      try {
          await testSendTransaction().then(function(result) {
          console.log(result);
          dispatch(BuyProduct({
            Product_ActivityID: "7Tk$K9N2nJIPW1BkBiCjpA__",
            ProductId: userEdit.ProductId,
            ethAddress_To: Cookies.get("ethAddress"),
            ethAddress_From: userEdit.User,
            Tgl_Penjualan: "2021-09-23",
            Value: userEdit.Harga,
            TransactionHash: result,
            bitComplete:true,
            bitSent: true
      },Cookies.get("UserData")))
      Swal.fire({
        title: "Congratulations!",
        text: "Your have bought this Product!",
        icon: "success",
        confirmButtonColor: '#9b6b43'
      }).then(function() {
        location.reload();
    });
    }).catch(function(error) {      
      console.log(error);
    }
  };

  return (
    <div className="flex h-20 items-center rounded-lg border border-[#151c22] bg-[#eaeaeb] px-12 justify-center items-end">
      <div
        onClick={Transfer}
        className={`${style.button} bg-yellow-700 hover:bg-yellow-800 content-end`}
      >
        <IoMdWallet className={style.buttonIcon} />
        <div className={style.buttonText}>Buy Now</div>
      </div>
    </div>
  );
};

export default BuyButton;
