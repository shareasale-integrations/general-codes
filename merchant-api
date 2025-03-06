/**
 * Merchant API code test code, this code is made for test purpose only. It will generate an API call for the 44911 account, if needed to be used for a different account,
 * please update the my_merchant_id, api_token and api_secret_key variables.
 */

async function sha256(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
    }
    let  my_merchant_id = 44911;
    let api_token = 'UHf2ge6r1FViev0n';
    let api_secret_key = 'SGs3ec1z7ZJile1eKSk3vb0j1JHpdo0v';
    let api_version = 3.0;
    let action_verb = 'new';
    let amount = "50000.00";
    let tracking = `testAPI-${Math.ceil(Math.random() * Math.ceil(Math.random() * 10000000))}`;
    let sscid = "";
    try {
        getCookie = function(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
          sscid = `&sscidmode=6&sscid=${JSON.parse(match[2]).clickId}`;
        }
      }
        getCookie("sas_m_awin");
        
      } catch (e) {
        console.log(e);
      }
    let couponCode = "API";
    let transtype = "sale";
    let my_timestamp = new Date().toUTCString();
    let sig = api_token + ":" + my_timestamp + ":" + action_verb + ":" + api_secret_key;
    let sig_hash = await sha256(sig);
    let my_headers = { 'x-ShareASale-Date': my_timestamp, 'x-ShareASale-Authentication': sig_hash };
    let url = 'https://www.shareasale.com/w.cfm';
    let path = `?merchantId=${my_merchant_id}&token=${api_token}&action=${action_verb}&XMLFormat=1&version=${api_version}&amount=${amount}&couponcode=${couponCode}&tracking=${tracking}&transtype=${transtype}${sscid}`;

    fetch(url + path, {
    method: 'get',
    headers: my_headers
    }).then((x) => { return x.text() }).then((x) => { console.log(x.trim()) })
    
    console.log(my_headers);
