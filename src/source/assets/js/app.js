const serverUrl = "https://usqkilnfhogo.usemoralis.com:2053/server";
const appId = "p7tBEfU31NgZCdnB3KbDr28BNUft50h1N2blVl3i";

Moralis.start({ serverUrl, appId });
Moralis.enableWeb3();

let _token = $('meta[name="csrf-token"]').attr("content");

async function login() {
    // let address = window.localStorage.getItem("address");
    // if (!address) {
    //     let user = Moralis.User.current();
    //     if (!user) {
            let user = await Moralis.authenticate({
                signingMessage: "Log in",
            })
                .then(function (user) {
                    let ethAddress = user.get("ethAddress");
                    $.ajax({
                        url: "/connect_wallet",
                        type: "POST",
                        data: {
                            address: ethAddress,
                            balance: 0,
                            _token: _token,
                        },
                        success: function (response) {
                            if (response) {
                                
                                            window.localStorage.removeItem(
                                                "address"
                                            );
                                            window.localStorage.setItem(
                                                "address",
                                                ethAddress
                                            );
                                            
                                $.post(
                                    "/get-address",
                                    {
                                        address: ethAddress,
                                        _token: _token,
                                    },
                                    function (response) {
                                        if (response.data.email) {
                                            window.localStorage.removeItem(
                                                "email"
                                            );
                                            window.localStorage.setItem(
                                                "email",
                                                response.data.email
                                            );
                                            
                                            location.reload();
                                        }
                                        else{
                                            window.location.assign("/set-info");
                                        }
                                        
                                    }
                                );
                                swal("Success", "Wallet Connected", "success");
                            }
                                swal("Success", "Wallet Connected", "success");
                        },
                        error: function (error) {
                            swal(
                                "Error Occurred",
                                "Wallet Not Connected",
                                "warning"
                            );
                        },
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
    //     } else {
    //         let ethAddress = user.get("ethAddress");
    //         window.localStorage.setItem("address", ethAddress);
    //     }
    // }
}

async function logout() {
    await Moralis.User.logOut();
    window.localStorage.removeItem("address");
    window.localStorage.removeItem("email");
    $.ajax({
        url: "/connect_wallet",
        type: "POST",
        data: {
            address: "",
            balance: 0,
            _token: _token,
        },
        success: function (response) {
            if (response) {
                swal("Success", "Wallet Disconnected", "success");
                window.location.reload()
            }
        },
        error: function (error) {
            swal("Error Occurred", "Failed to Disconnected", "warning");
        },
    });
}

const upload = document.querySelector("#upload");
if (upload) {
    upload.addEventListener("click", async (e) => {
        document.getElementById("upload").style.display = "none";
        e.preventDefault();
        const form = $("#uploadForm")[0];
        const formData = new FormData(form);
        let name = document.querySelector("#name").value;
        let address = document.querySelector("#address").value;
        let description = document.querySelector("#description").value;
        let royalty = document.querySelector("#royalty").value;
        const input = document.querySelector("#file");
        let data = input.files[0];
        const imageFile = new Moralis.File(data.name, data);
        await imageFile.saveIPFS();
        let imageHash = imageFile.hash();

        let metadata = {
            name: name,
            description: description,
            image: "/ipfs/" + imageHash,
        };
        const jsonFile = new Moralis.File(
            "metadata" + Math.random() + ".json",
            { base64: btoa(JSON.stringify(metadata)) }
        );
        await jsonFile.saveIPFS();
        formData.append("metadata", JSON.stringify(jsonFile));

        let metadataHash = jsonFile.hash();
        formData.append("hash", metadataHash);
        formData.append("ipfs_url", jsonFile.ipfs());
        // let res = await Moralis.Plugins.rarible.lazyMint({
        //     chain: "rinkeby",
        //     userAddress: address,
        //     tokenType: "ERC721",
        //     tokenUri: "ipfs://" + metadataHash,
        //     royaltiesAmount: royalty,
        // });
        // console.log(res);
        // let rarible = `https://rinkeby.rarible.com/token/${res.data.result.tokenAddress}:${res.data.result.tokenId}`;
        // formData.append("rarible_url", rarible);
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/upload",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 800000,
            success: function (response) {
                if (response) {
                    document.getElementById("uploadForm").reset();
                    document.getElementById("upload").style.display = "block";
                    swal("Success", "NFT uploaded", "success");
                }
            },
            error: function (error) {
                document.getElementById("upload").style.display = "block";
                swal("Error Occurred", "Failed to upload nft", "warning");
            },
        });
    });
}


const setInfo = () => {
    let email = document.querySelector("#email").value;
    let name = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;
    let address = window.localStorage.getItem('address');
    if(address){
        $.ajax({
            type: "POST",
            url: "/set-info",
            data: {
                address,
                email,
                name,
                password
            },
            success: function (response) {
                if(response){
                    Moralis.User.currentAsync().then(async function(user) {
                        user.set("username", name);
                        user.set("email", email);
                        user.set("password", password);
                        await user.save();
                    });
                    window.localStorage.removeItem(
                                                "address"
                                            );
                                            window.localStorage.setItem(
                                                "address",
                                                address
                                            );
                                            window.localStorage.removeItem(
                                                "email"
                                            );
                                            window.localStorage.setItem(
                                                "email",
                                                email
                                            );
                    swal("Hurray", "Profile updated", "success");
                    window.location.assign('/profile')
                }
                else{
                    swal("Error", "failed to update info", "warning");
                }
            },
            error: function (error) {
                swal(
                    "Error Occurred",
                    "Unable to set info.",
                    "warning"
                );
            },
        });
    }
    else{
        swal(
            "Error Occurred",
            "Please login with wallet",
            "warning"
        );
    }
}
