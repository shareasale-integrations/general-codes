/**
 * Open the merchant's transaction page and run this script to get the fraud orders as a comment.
 * This code will get orders without Order ID and orders with "FRAUD" in the comment.
 */
let transactions = document.querySelectorAll(".transDetails");
let comment = "";
transactions.forEach((transaction) => {
    let hasId = transaction.querySelector(".orderId input") ? true : false ;
    let pixelContainer = transaction.querySelector(".detailsContainer").querySelectorAll("div");
    let trackingPixel = pixelContainer[pixelContainer.length - 2].querySelector("input") ? decodeURIComponent(pixelContainer[pixelContainer.length - 2].querySelector("input").value) : "";
    let ipHash;
    pixelContainer.forEach((item) => {
        if (item.textContent.toUpperCase().includes("HASH")) {
            ipHash = item.textContent.trim().replaceAll("\n","").replace("IP Hash:","");
        }
    });
    !hasId || transaction.querySelector(".col2Lst input").value.toUpperCase().includes("FRAUD") ? comment = comment + `${transaction.querySelector(".affDetails .name").textContent}, Affiliate ID: ${transaction.querySelector(".affDetails .quickFilterLink").textContent} | ${transaction.querySelector(".trnsId").textContent.trim()} | Tracking Pixel: ${trackingPixel}\n\n` : "";
    
});
console.log(comment);


