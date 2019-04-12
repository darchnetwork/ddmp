$(document).ready(function() {

    if (typeof web3 !== 'object') {
      alert('MetaMask not loaded, try later');
      return;
    }

  const web4 = new Web3(web3.currentProvider);

	var darchContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"num_of_transmit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"string"}],"name":"num_of_product_requests","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundsWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"string"}],"name":"RWlist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pid","type":"uint256"}],"name":"getpnamefromid","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pname","type":"string"}],"name":"checkProductExist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pid","type":"string"},{"name":"index","type":"uint256"}],"name":"getTransmits","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pname","type":"string"}],"name":"getProductFromName","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberofProduct","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"string"}],"name":"BWlist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_wallet","type":"string"}],"name":"checkWalletexist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_listid","type":"uint256"}],"name":"get_product_from_pid","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"num_of_request","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"index","type":"uint256"}],"name":"cancelTransmitProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"uHeadline","type":"string"},{"name":"uExplain","type":"string"},{"name":"uImageList","type":"string"},{"name":"uShowDemo","type":"string"},{"name":"uCate","type":"string"},{"name":"uPrice","type":"uint256"},{"name":"pname","type":"string"}],"name":"SharenewProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"pubkey","type":"string"}],"name":"setNewRequest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"string"},{"name":"index","type":"uint256"}],"name":"get_public_key","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"address"}],"name":"WallettoString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_walletandid","type":"string"}],"name":"checkBWalletexist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"index","type":"uint256"},{"name":"smessage","type":"string"}],"name":"setTransmitProduct","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pid","type":"string"}],"name":"num_of_product_transmit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listofproducts","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listoftransmits","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listofrequests","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_listid","type":"uint256"}],"name":"get_transmits_from_pid","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}]);

	var Darch = darchContract.at('0xC4E848529e436C848144Eafb0387A6faEba94a65');


  const amount = parseFloat(0.001);

    if (isNaN(amount) || amount < 0) {
      alert('Please, enter valid donation size!');
      return;
    }

   if (!web4.eth.accounts[0]) {
     alert('Please, login to MetaMask first');
     return;
   }


   Darch.numberofProduct(function(error, result){ if(!error){
        var numberofproduct = result.c[0];
        console.log("result", numberofproduct);
        for (const x of Array(numberofproduct).keys()) {
            console.log("im here : ",x);
            getnamesBro(x);
        }
        }
     else
       console.error(error);
     });


     function getnamesBro(getid){
       console.log("twiliowwww", getid);


       Darch.getpnamefromid(getid,function(error, result){
         if(!error){
           //console.log("getpnamefromid",result);
           getallprodoctDetails(result);

            } else
            console.error(error);
          });
     }

     // getProductFromName


     function getallprodoctDetails(jjpnamejj){
       console.log("twiliowwww", jjpnamejj);


       Darch.getProductFromName(jjpnamejj,function(error, result){
         if(!error){
           console.log("zero- time",result[0]);
           console.log("one - price",result[1]);
           console.log("two - header",result[2]);
           console.log("three - explain",result[3]);
           console.log("four - cover photo",result[4]);
           console.log("five - live url",result[5]);
           console.log("six - tag",result[6]);

           var explaintedxt = result[3];
           var smalltext = explaintedxt.substring(0, 138) + "...";

           $("#pl-1").prepend('<div class="product-item column">'+
             '<div class="product-preview-actions">'+
               '<figure class="product-preview-image">'+
                 '<div style="height:150px;width:258px;background: lightblue url('+result[4]+');background-repeat: no-repeat; background-size: 258px 150px;" ></div>'+
               '</figure>'+
               '<div class="preview-actions">'+
                '<div class="preview-action">'+
                   '<a href="'+jjpnamejj+'">'+
                     '<div class="circle tiny primary">'+
                       '<span class="icon-tag"></span>'+
                     '</div>'+
                   '</a>'+
                   '<a href="'+jjpnamejj+'">'+
                     '<p>Go to Item</p>'+
                   '</a>'+
                 '</div>'+
                 '<div class="preview-action">'+
                   '<a href="#">'+
                     '<div class="circle tiny secondary">'+
                       '<span class="icon-heart"></span>'+
                     '</div>'+
                   '</a>'+
                   '<a href="'+jjpnamejj+'">'+
                    ' <p>Favourites +</p>'+
                   '</a>'+
                 '</div>'+
               '</div>'+
             '</div>'+
            '<div class="product-info">'+
            '<a href="'+jjpnamejj+'"><p class="text-header">'+result[2]+'</p></a>'+
            '<p class="product-description">'+smalltext+'</p>'+
            '<a href="'+jjpnamejj+'">'+
            '<p class="category primary">'+result[6]+'</p>'+
            '</a>'+
            '<p class="price"><span>DARCH  </span>'+web4.fromWei(result[1],'ether')+'</p></div>'+
            '<hr class="line-separator">'+
            '</div>');



            } else
            console.error(error);
          });
     }

   //ethereumaddress

    Darch.balanceOf(ethereumaddress,  function(error, result){
       if(!error){

         var correctbalance =  web4.fromWei(result, 'ether'); //result/1000000000000000000

         console.log("balanceOf", ethereumaddress + ' and ' + correctbalance  +'  and  '+ result);


         $("#user-money").text(correctbalance + ' Darch');

         }
      else
        console.error(error);
     });




  // Darch.getInstructor(function(error, result){
  //   if(!error){
  //     $(“#instructor”).html(result[0]+’ (‘+result[1]+’ years old)’);
  //     console.log(result);
  //     }
  //  else
  //    console.error(error);
  //  });
















});
