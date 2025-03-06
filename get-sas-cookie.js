/**
 * This code was made to get the ShareASale Cookie and use it as needed, normally shared in cases where the merchant
 * needs to append the clickId into the Tracking Pixel.
 * 
 * It will first try getting the cookie and then if the cookie is found into the browser, it will run 
 * the appendCookie function. If the cookie is not found, it only log a message into the console.
 * 
 * If there's any error during this process, the catch statement will re-run the whole function after 2 seconds.
 */

window.addEventListener("load", () => { // waits until the page is loaded to run the code, remove this and the last line if it is not necessary for you
  const appendCookie = (clickId) => { // function to be called only if the cookie existing, receiving the clickId necessary to append the parameter. 
    // Handle the cookie appending, please change the console.log() call for the necessary code to append the sscid=clickId parameter into the Tracking Pixel
    console.log(`sscid=${clickId}`);
  }
  const initiateCookie = () => {
    try {
      getCookie = function(name) { // verify if the cookie exists, if the cookie doesn't exist or the mastertag is not installed, it will return 'No Cookie Found' into the console. Please change this logic if you want to have something different 
      let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        appendCookie(JSON.parse(match[2]).clickId);
      } else {
        console.log('No Cookie Found');
      }
    }
      getCookie("sas_m_awin");
      
    } catch (e) {
      // wait 2 seconds and make a new attempt to get the cookie if there's any error
      setTimeout(() => {
        initiateCookie();
      }, 2000);
      console.log('No Cookie Found');
    }
  }
  initiateCookie();
});  // window.addEventLister closing tags
