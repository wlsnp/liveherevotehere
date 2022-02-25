const urlObj = new URL( window.location.href ); // create a URL object from the page link
let ourCode = urlObj.searchParams.get('ccc');   // extract the ccc code from the ?ccc=XX suffix
let ourHost = urlObj.hostname;                  // hostname is the FQDN of the web server
let ourDom  = ourHost.replace(/^(.+?)\./, "");  // the domain is assumed to be one DNS level up
let myPath  = urlObj.pathname;                  // the path contains the name of the language HTML document
let ourLang = myPath.substr(1,2);               // and its first two letters denote the language used
switch(ourCode) {
  case "ab": locality = "Argyll & Bute"; register = "https://www.saa.gov.uk/dab-vjb/electoral-registration/"; break;
  case "ac": locality = "Aberdeen City"; register = "https://www.grampian-vjb.gov.uk/electoral-register/"; break;
  case "an": locality = "Angus"; register = "https://www.tayside-vjb.gov.uk/electoral-registration/"; break;
  case "as": locality = "Aberdeenshire"; register = "https://www.grampian-vjb.gov.uk/electoral-register/"; break;
  case "cm": locality = "Clackmannanshire"; register = "https://www.saa.gov.uk/central/electoral-registration-postal-proxy-votes/"; break;
  case "dc": locality = "Dundee City"; register = "https://www.tayside-vjb.gov.uk/electoral-registration/"; break;
  case "dg": locality = "Dumfries & Galloway"; register = "https://www.dumgal.gov.uk/article/15146/Register-to-vote"; break;
  case "ea": locality = "East Ayrshire"; register = "http://www.ayrshire-vjb.gov.uk/er.html"; break;
  case "ec": locality = "Edinburgh City"; register = "https://www.lothian-vjb.gov.uk/electoral"; break;
  case "ed": locality = "East Dunbartonshire"; register = "https://www.saa.gov.uk/dab-vjb/electoral-registration/"; break;
  case "el": locality = "East Lothian"; register = "https://www.lothian-vjb.gov.uk/electoral"; break;
  case "er": locality = "East Renfrewshire"; register = "https://www.renfrewshire-vjb.gov.uk/electoral-forms"; break;
  case "fi": locality = "Fife"; register = "https://www.fife.gov.uk/kb/docs/articles/council-and-democracy/elections2/register-to-vote"; break;
  case "fk": locality = "Falkirk"; register = "https://www.saa.gov.uk/central/electoral-registration-postal-proxy-votes/"; break;
  case "gc": locality = "Glasgow City"; register = "https://www.glasgow.gov.uk/registertovote"; break;
  case "hi": locality = "Highland"; register = "https://www.saa.gov.uk/h-wi-vjb/the-electoral-register/"; break;
  case "ic": locality = "Inverclyde"; register = "https://www.renfrewshire-vjb.gov.uk/electoral-forms"; break;
  case "ml": locality = "Midlothian"; register = "https://www.lothian-vjb.gov.uk/electoral"; break;
  case "mo": locality = "Moray"; register = "https://www.grampian-vjb.gov.uk/electoral-register/"; break;
  case "na": locality = "North Ayrshire"; register = "http://www.ayrshire-vjb.gov.uk/er.html"; break;
  case "nl": locality = "North Lanarkshire"; register = "https://www.lanarkshire-vjb.gov.uk/lvjb/info/3/electoral_registration"; break;
  case "ok": locality = "Orkney"; register = "http://www.orkney-shetland-vjb.co.uk/ELECTORAL.html"; break;
  case "pk": locality = "Perth & Kinross"; register = "https://www.tayside-vjb.gov.uk/electoral-registration/"; break;
  case "rf": locality = "Renfrewshire"; register = "https://www.renfrewshire-vjb.gov.uk/electoral-forms"; break;
  case "sb": locality = "Scottish Borders"; register = "https://www.scotborders.gov.uk/info/20057/elections_and_voting/417/register_to_vote"; break;
  case "si": locality = "Shetland Islands"; register = "http://www.orkney-shetland-vjb.co.uk/ELECTORAL.html"; break;
  case "sa": locality = "South Ayrshire"; register = "http://www.ayrshire-vjb.gov.uk/er.html"; break;
  case "sl": locality = "South Lanarkshire"; register = "https://www.lanarkshire-vjb.gov.uk/lvjb/info/3/electoral_registration"; break;
  case "st": locality = "Stirling"; register = "https://www.saa.gov.uk/central/electoral-registration-postal-proxy-votes/"; break;
  case "wd": locality = "West Dunbartonshire"; register = "https://www.saa.gov.uk/dab-vjb/electoral-registration/"; break;
  case "wi": locality = "Western Isles"; register = "https://www.saa.gov.uk/h-wi-vjb/the-electoral-register/"; break;
  case "wl": locality = "West Lothian"; register = "https://www.lothian-vjb.gov.uk/electoral"; break;
  default: locality = "local"; register = "https://www.gov.uk/register-to-vote";
}

// change the span with ID 'county' to the locality derived from the ccc code
document.getElementById("county").innerHTML = locality;

// craft the mailto tag by getting the recipient from the ccc code and adding the language suffix to the subject for easier filtering and forwarding
// it is assumed that the email domain is one DNS level up, since X.509 wildcard certificates would not cover lower levels for the web server
let mailTag = '<a href="mailto:' + ourCode + '-ccc@' + ourDom +  '?subject=Council elections 2022 ' + ourLang + '">' + ourCode + '-ccc@' + ourDom + '</a>';

// set the voting registration link according to the ccc code
let regiTag = '<a href="' + register + '">' + register + '</a>';

// insert both tags into the language HTML document
document.getElementById("email").innerHTML = mailTag;
document.getElementById("votereg").innerHTML = regiTag;
