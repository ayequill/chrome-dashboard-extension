fetch("https://api.unsplash.com/photos/random?client_id=KU2xKkCfogrNGxcflWBJ8cqyeAtU2LGMylH6pHmpHis&orientation=landscape&query=dmt").then((e=>e.json())).then((e=>{document.body.style.backgroundImage=`url('${e.urls.regular}')`;const t=document.createElement("div");t.innerHTML=`<p class="author"> <strong>Credit:</strong> ${e.user.first_name}</p>`,document.querySelector(".container").appendChild(t)})).catch((e=>{document.body.style.backgroundImage="url('./dist/assets/img/def-bg.jpg')"})),fetch("http://api.coingecko.com/api/v3/coins/list",{method:"GET"}).then((e=>e.json())).then((e=>{console.log(e)}));