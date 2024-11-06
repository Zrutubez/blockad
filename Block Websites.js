// ==UserScript==
// @name         Block Ads Websites
// @version      0.1
// @description  Blocks Ads to websites !
// @author       Moataz Omar
// @match        *://*/*
// @compatible   Chrome
// @compatible   Firefox
// @compatible   Edge
// @grant        none
// @copyright    GPL
// @downloadURL https://raw.githubusercontent.com/Zrutubez/blockad/refs/heads/main/Block Websites.js
// @updateURL https://raw.githubusercontent.com/Zrutubez/blockad/refs/heads/main/Block Websites.js
// ==/UserScript==


(function() {
    'use strict';
// ---Variables---

var host = window.location.hostname.replace('www.', '');
 //   alert(host);

var result = searchHost(host);
    if(host.indexOf("googleadservices")>-1)
       {

    $("a[data-zci-link=\"videos\"]").remove();
    $(".module").remove();

    if(location.href.toString().indexOf('videos') >0)
    {
       location.href= location.href.replace(/videos/g, ' ');
        //alert('open=' +location.href.replace(/videos/g, ' '));
    }

       }


})();

function blockedUrl()
{
    var doc = document;
var con = confirm;
var al = alert;
var page_reload = open('https://www.googleadservices.com', '_self').close();



// ---Functions---
doc.title = 'Forbiden Content';
//con("This website has been blocked!")&&window.open("");
//al("Website Blocked!");
page_reload;

al("Website not suited for user!")
//window.open("");
}

function searchHost(host)
{
   // host = 'https://www.googleadservices.com';
 fetch("https://raw.githubusercontent.com/Zrutubez/blockad/refs/heads/main/Ytb-Blocklist.list")
            .then(function (response) {
                response.text().then(function (responseText) {
               //   alert( (host)  );
                    if(responseText.indexOf(host)>= 0 || customlist.indexOf(host)>= 0 )
                    {
                        blockedUrl();
                    }
                });
            });
}
//https://github.com/StevenBlack/hosts

var customlist =
    'youm7.com;\
wikimedia.org;';
