/**
 * This is an example code for a Tracking Pixel injection, this can be used when the merchant is trying
 * to get a tracking pixel implementation and need some example on how to do that.
 * 
 * Merchant ID and Mastertag ID needs to be replaced with the correct values before sharing the code with the client.
 */
window.addEventListener("load", () => { // Window load event, to start working only when the page is loaded
    
  if (! localStorage.noFirstVisit) { // Checks if this is the first time the visitor opens this page
    localStorage.noFirstVisit = "1"; // Checks for avoid having this code twice

    const pageHead = document.head; 
    // Create and PREPEND the Tracking Pixel 
    let trackingPixel = document.createElement("img"); 
    trackingPixel.id = "_SHRSL_img_1"; 
    trackingPixel.width = 1; 
    trackingPixel.height = 1; 
    let merchantID = "44911"; // Your Merchant ID.
    let amount = "125.25"; // Adds a function or variable that have the amount with the following format: 15.25 (without including Tax or Shipping Fees)
    let trackingID = "123456"; // Adds a function or variable that have the Order ID (unique order identifier)

    trackingPixel.src = `https://www.shareasale.com/sale.cfm?tracking=${trackingID}&amount=${amount}&merchantID=${merchantID}&v=dev1.5&transtype=sale`; 

    // Add the Tracking Pixel as the first element on the <head> tag (showing before the Mastertag code) 
    pageHead.prepend(trackingPixel); 
    console.log(trackingPixel);

    // REMOVE THIS CODE IF YOU ALREADY HAVE THE MASTERTAG IMPLEMENTED
    let mastertagCode = document.createElement("script"); 
    let mastertagID = "19038"; // The Mastertag ID for your account.
    mastertagCode.type = "text/javascript"; 
    mastertagCode.defer = "defer"; 
    mastertagCode.src = `https://www.dwin1.com/${mastertagID}.js`; 
    pageHead.append(mastertagCode); 
    // REMOVING CODE ENDS HERE, DOES NOT REMOVE CODE BELOW THIS LINE

  } // Ends of "if (! localStorage.noFirstVisit)"

}); // Ends of Window.load event, please do not remove.
