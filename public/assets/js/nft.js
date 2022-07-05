const serverUrl = "https://tt2drgyjht4x.usemoralis.com:2053/server"
const appId =  "aW4dUUxbsgECmVCjeHyiIUbMZYwnsm32yK0ydHKb" 
Moralis.start({ serverUrl, appId});

init = async () => {
    // Window.web3 = await Moralis.Web3.enable();
    Window.web3 = await Moralis.enableWeb3();
    initUser();
}
initUser = async () => {
    if (await Moralis.User.current()) {
        hiding(header);
        showing(headerAdmin);
    } else {
        showing(header);
        hiding(headerAdmin);
    }
}
login = async () => {
    try {
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch (err) {
        alert("you don't have metamsk in your browser, please download it from https://metamask.io/")
    }
}

// async function logOut() {
//     await Moralis.User.logOut();
//     console.log("logged out");
// }

hiding = (element) => element.style.display = 'block';
showing = (element) => element.style.display = 'none';

const header = document.getElementById('header');
const headerAdmin = document.getElementById('header_admin');



const connectBtn = document.getElementById('connectbtn');
connectBtn.onclick = login;
init()