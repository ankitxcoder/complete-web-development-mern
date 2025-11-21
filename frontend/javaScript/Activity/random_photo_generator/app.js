let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
//2 add event list..
btn.addEventListener("click", async () => {
  let link = await getImage();
  let image = document.querySelector("#imagepart");
  image.setAttribute("src", link);
  console.log(link);
});

// 1 make a function for fetch on url
async function getImage() {
  try {
    let result = await axios.get(url);
    console.log(result.data.message);
    return result.data.message; //Yahi sabse important line
  } catch (err) {
    console.log("there no image found", err);
    return "/";
  }
}

//chatgpt code
// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// // button click
// btn.addEventListener("click", async () => {
//   let image = document.querySelector("#imagepart");

//   let link = await getImage();
//   console.log("link from getImage =", link); // debug

//   if (!link) return;          // agar kuch galti ho to yahi ruk jao

//   image.setAttribute("src", link);
// });

// // API se image url laane ka function
// async function getImage() {
//   try {
//     let result = await axios.get(url);
//     console.log("API se aya:", result.data.message);
//     return result.data.message;     // 👈 Yahi sabse important line
//   } catch (err) {
//     console.log("there no image found", err);
//     return null;                    // error me null/undefined bhej do
//   }
// }
