// Todo: Storyline
// Todo: 1. Need to get team GitHub username
// Todo: 2. Integrate GitHub API
// Todo: 3. Need to add username with https://api.github.com/users/username
// Todo: 4. Display the data from API to UI

import axios from "axios";

const teamUsernames = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

const token = "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";

teamUsernames.forEach((element) => {
  const apiUrl = `https://api.github.com/users/${element}`;
  axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((response) => {
      // Display the data in the UI or process it as needed
      console.log(`Repos for ${element}:`, response.data);

      const divEl = document.createElement("div");
      divEl.id = "profile-container";
      divEl.classList.add("px-10", "items-center", "justify-between");

      divEl.innerHTML = `<div class="bg-[#FBF6EE] p-5 w-[300px] mt-[50px] rounded-md">
<img
  src="${response.data["avatar_url"]}"
  class="w-[150px]  mx-auto mt-5 rounded-full object-cover border-4 border-[#142850]"
  alt=""
/>

<div class="text-[#142850] text-center">
  <div class="text-center mt-3">
    <p class="font-bold text-2xl">${response.data.name}</p>
  </div>

  <div>
   <p>${
     response.data.location === null
       ? "Currently their native unavailable"
       : `📍 ${response.data.location}`
   }</p>
  </div>

  <div class="flex gap-x-4 justify-center">
    <div class="flex items-center gap-x-2">
      <p class="font-bold">Following:</p>
      <p>${
        response.data.following < 10
          ? `0${response.data.following}`
          : `${response.data.following}`
      }</p>
    </div>

    <div class="flex items-center gap-x-2">
      <p class="font-bold">Followers:</p>
      <p>${
        response.data.followers < 10
          ? `0${response.data.followers}`
          : `${response.data.followers}`
      }</p>
    </div>
  </div>

  <div class="flex items-center justify-center gap-x-2">
    <p class="font-bold">Public Repos:</p>
    <p>${
      response.data["public_repos"] < 10
        ? `0${response.data["public_repos"]}`
        : `${response.data["public_repos"]}`
    }</p>
  </div>

  <div class="mt-5 mb-5">
    <a
      href= "https://github.com/${response.data.login}?tab=repositories"
      target="_blank"
      class="bg-[#142850] text-[#FBF6EE] px-5  py-2 rounded-md cursor-pointer hover:transition 500 hover:bg-[#425272]"
      >View Repo</a
    >
  </div>
</div>
</div>`;

      document.body.append(divEl);
    })
    .catch((error) => {
      console.error(`Error fetching repos for ${element}:`, error.message);
    });
});
