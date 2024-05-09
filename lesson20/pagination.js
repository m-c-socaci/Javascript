const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

// const fetchPostsButton = document.querySelector(".btn");
const loader = document.querySelector(".loader");
const postsUl = document.querySelector(".posts");

let pageNumber = 1;

fetchPosts();

// fetchPostsButton.addEventListener("click", () => {
//   fetchPosts();
// });

const renderPost = (post) => {
  const liElem = document.createElement("li");

  const titleElem = document.createElement("h2");
  titleElem.textContent = post.title;

  const postNbElem = document.createElement("h3");
  postNbElem.textContent = `Post #${post.id}`;

  const userElem = document.createElement("h4");
  userElem.textContent = `User: ${post.userId}`;

  const descriptionElem = document.createElement("p");
  descriptionElem.textContent = post.body;

  liElem.append(titleElem, postNbElem, userElem, descriptionElem);

  return liElem;
};

function fetchPosts() {
  const queryParams = new URLSearchParams({
    _limit: 10,
    _page: pageNumber,
  });

  axios
    .get(`${JSON_PLACEHOLDER_URL}/posts?${queryParams}`)
    .then((response) => {
      //   if (response.data.length === 0) {
      //     fetchPostsButton.style.visibility = "hidden";
      //   }
      if (response.data.length === 0) {
        loader.style.visibility = "hidden";
      }

      const postsListItems = response.data.map((post) => renderPost(post));

      postsUl.append(...postsListItems);
      pageNumber++;
    })
    .catch((err) => console.log(err));
}

window.addEventListener(
  "scroll",
  _.debounce(() => {
    const scrolledTo = window.scrollY + window.innerHeight;

    const isReachBottom = document.body.scrollHeight <= scrolledTo;

    if (isReachBottom) {
      fetchPosts();
    }
  }, 300)
);
