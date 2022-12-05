"strict mode";

const adviceDiv = document.querySelector(".advice");
const spiner = document.querySelector(".spiner");
const generator = document.querySelector(".generator");
const adviceId = document.querySelector(".advice-id");

//

async function getAdvice() {
  //
  adviceDiv.style.opacity = 0;
  adviceId.style.opacity = 0;
  spiner.classList.remove("none");

  //

  //

  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error(`Oops something went wrong ${res.status}, try again!`);
    }
    const Obj = await res.json();
    const { id, advice } = await Obj.slip;

    adviceDiv.textContent = advice;
    adviceId.textContent = id;
  } catch (err) {
    adviceDiv.textContent = err;
  } finally {
    setTimeout(() => {
      spiner.classList.add("none");

      adviceDiv.style.opacity = 1;
      adviceId.style.opacity = 1;
    }, 1000);
  }
}
generator.addEventListener("click", function () {
  getAdvice();
});
