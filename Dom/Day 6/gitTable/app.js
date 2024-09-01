async function userList() {
  try {
    let users = await fetch("https://api.github.com/users");
    users = await users.json();

    if (users) {
      let dataTable = document.getElementById("dataTable");

      let table = document.createElement("table");
      let thead = document.createElement("thead");
      let maintr = document.createElement("tr");
      let headtr = document.createElement("tr");
      let userth = document.createElement("th");
      userth.innerText = "LIST OF USER";
      userth.colSpan = 3;
      let slth = document.createElement("th");
      slth.innerText = "Sl No.";
      let nameth = document.createElement("th");
      nameth.innerText = "Name of User";
      let imgth = document.createElement("th");
      imgth.innerText = "Image";
      maintr.append(userth);
      headtr.append(slth, nameth, imgth);
      let tbody = document.createElement("tbody");

      dataTable.prepend(table);
      table.append(thead);
      thead.append(maintr);
      thead.append(headtr);
      table.append(tbody);
      users.map(({ login, id, avatar_url }) => {
        let bodytr = document.createElement("tr");
        let sltd = document.createElement("td");
        let nametd = document.createElement("td");
        let imgtd = document.createElement("td");
        let img = document.createElement("img");
        img.src = avatar_url;

        sltd.innerText = id;
        nametd.innerText = login;
        imgtd.append(img);

        bodytr.append(sltd, nametd, imgtd);
        tbody.append(bodytr);
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}

userList();
