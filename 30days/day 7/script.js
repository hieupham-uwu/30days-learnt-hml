const tagCollection = ["NodeJS", "ReactJS"];
const listTag = document.querySelector(".search__tag");
const searchInput = document.querySelector(".search__input");
const searchTag = document.querySelector(".search_tag");
const searchRemove = document.querySelector(".search__remove");
let dataId = 0;

const renderTag = () => {
  tagCollection.forEach((tag, index) => {
    listTag.innerHTML += `<li class="search__item" dataId = ${index}>${tag} 
                    <i class="fa-solid fa-xmark" onclick = removeTag(${index})>
                        </i></li>`;
    dataId++;
  });
};

const addTag = (tag) => {
  listTag.innerHTML += `<li class="search__item" dataId = ${dataId}>${tag} 
                     <i class="fa-solid fa-xmark" onclick =removeTag(${dataId})>
                        </i></li>`;
  dataId++;
};

const removeTag = (id) => {
  listTag.removeChild(listTag.querySelector(`[dataId = "${id}"]`));
};

renderTag();

searchRemove.onclick = (e) => {
  tagCollection.splice(0, tagCollection.length);
  listTag.innerHTML = "";
  dataId = 0;
};

searchInput.onkeydown = (e) => {
  if (e.key == "Enter") {
    if (tagCollection.includes(searchInput.value)) {
      searchInput.value = "";
      return;
    }
    tagCollection.push(searchInput.value);
    addTag(searchInput.value);
    console.log(tagCollection);
    searchInput.value = "";
    searchInput.focus();
  }
};
