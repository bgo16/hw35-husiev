const shopArray=[{category:"Something",productsList:[{name:"asd",info:"qwerty"},{name:"asd1",info:"qwerty1"},{name:"asd2",info:"qwerty2"}]},{category:"Something cool",productsList:[{name:"zxc",info:"asdfgh"},{name:"zxc1",info:"asdfgh1"},{name:"zxc2",info:"asdfgh2"}]},{category:"Somethin not cool",productsList:[{name:"qwe",info:"zxcvbn"},{name:"qwe1",info:"zxcvbn1"},{name:"qwe2",info:"zxcvbn2"}]}],categoryList=document.querySelector(".category-list"),productList=document.querySelector(".product-list"),productInfo=document.querySelector(".product-info");function renderCategories(){categoryList.innerHTML="",productList.innerHTML="",productInfo.innerHTML="",shopArray.forEach((e=>{const t=document.createElement("li");t.textContent=e.category,t.addEventListener("click",(()=>renderProducts(e.productsList))),categoryList.appendChild(t)}))}function renderProducts(e){productList.innerHTML="",productInfo.innerHTML="",e.forEach((e=>{const t=document.createElement("li");t.textContent=e.name,t.addEventListener("click",(()=>renderProductInfo(e))),productList.appendChild(t)}))}function renderProductInfo(e){productInfo.innerHTML="";const t=document.createElement("li");t.textContent="Name: "+e.name;const n=document.createElement("li");n.textContent="Info: "+e.info;const o=document.createElement("button");o.textContent="Press to buy",o.addEventListener("click",(()=>{alert("Product purchased"),renderCategories()})),productInfo.appendChild(t),productInfo.appendChild(n),productInfo.appendChild(o)}renderCategories();