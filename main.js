const Container = document.querySelector(".container");
const Query = document.querySelector("#SearchBox");
const Search = document.querySelector(".SearchButton");

const SearchShow = async function (Query) {
  const Raw = await fetch(`https://api.tvmaze.com/search/shows?q=${Query}`);
  const Data = await Raw.json();
  return Data;
};

Search.addEventListener("click", async () => {
  const OutPutCheck = document.querySelector(".Output");
  OutPutCheck == undefined ? null : OutPutCheck.remove();
  const Data = await SearchShow(Query.value);
  const Shows = Data.map((Shows) => {
    console.log(Shows);
    return `<div class="items">${
      Shows.show.image
        ? `<img width="300px" src=${Shows.show.image.original}>`
        : "<h1>No Image Found</h1>"
    }<h2>${Shows.show.name}</h2><h2>Match Score: ${Shows.score}</h2></div>`;
  });
  const Output = document.createElement("div");
  Output.classList.add("Output");
  Output.innerHTML = Shows;
  Container.appendChild(Output);
});
