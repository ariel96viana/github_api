$(document).ready(function () {
  const avatar = $(".profile-avatar");
  const name = $("#name");
  const username = $(".profile-username");
  const repositorys = $(".repositorys");
  const followers = $(".followers");
  const following = $(".following");
  const profileLink = $(".profile-link");

  const endpoint = "https://api.github.com/users/ariel96viana";

  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      avatar.attr("src", json.avatar_url);
      name.html(json.name);
      username.html(json.login);
      repositorys.html(json.public_repos);
      followers.html(json.followers);
      following.html(json.following);
      profileLink.attr("href", json.html_url);
    })
    .catch(function (error) {
      alert("Deu ruim, meu!");
    })
    .finally(function () {});
});
