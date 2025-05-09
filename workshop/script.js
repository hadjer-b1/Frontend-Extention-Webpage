document.addEventListener("DOMContentLoaded", () => {
  //-----------------Mode Switch----------------------
  const darkMode = document.querySelector(".dark-mode");

  darkMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("Light-Mode-body"); // toggle do the switch action
  });

  //-----------------Edit / Remove Extension----------------------
  function ExtensionEventListener(btnAction) {
    const Removebtn = btnAction.querySelector(".Removebtn");
    const Editbtn = btnAction.querySelector(".Editbtn");

    Editbtn.addEventListener("click", () => {
      const nameEdit = prompt(
        "Edit the extention name...",
        btnAction.querySelector("h3").textContent
      );
      const ParaEdit = prompt(
        "Edit the extention details...",
        btnAction.querySelector("p").textContent
      );
      const ImgEditSrc = prompt("Add the url for the new img..");
      if (nameEdit && ParaEdit && ImgEditSrc) {
        btnAction.querySelector("h3").textContent = nameEdit;
        btnAction.querySelector("p").textContent = ParaEdit;
        btnAction.querySelector("img").src = ImgEditSrc;
      }
    });

    Removebtn.addEventListener("click", () => {
      btnAction.remove();
    });
  }

  //--------------------Add a New Extention----------------------------
  const Addbtn = document.getElementById("Addbtn");

  Addbtn.addEventListener("click", () => {
    AddNewExtn();
  });

  function AddNewExtn() {
    const container = document.querySelector(".container");
    const NewExten = document.createElement("div");
    const LastExten = container.lastElementChild;
    NewExten.classList.add("item");
    NewExten.innerHTML = `
       <div class="part-1"> 
                 <img src="url" class="extension-icon alt= "Extenstion Icon"">
                 <div class="extension-name">
                      <h3></h3>
                      <p></p>
                </div>
            </div>
            <div class="part-2">
                <div class="btns">
                    <button class="Removebtn btn"> Remove</button> <!-----check it again button/a-->
                    <button class="Editbtn btn "> Edit </button>  
                </div>
                    <label class="switch">
                          <input type="checkbox">
                          <span class="slider "></span>
                    </label>
            </div>
       `;
    LastExten.insertAdjacentElement("afterend", NewExten);
    ExtensionEventListener(NewExten);
  }

  //----------------------all/active/inactive--------------------
  const All = document.querySelector(".all");
  const Active = document.querySelector(".active");
  const Inactive = document.querySelector(".inactive");

  Active.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const input = item.querySelector(".switch input");
      item.style.display = input.checked ? "block":"none"; 
   });
  });
   
  Inactive.addEventListener("click", () =>{
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const input = item.querySelector(".switch input");
      item.style.display = !input.checked ? "block":"none"; 
   });
  });
  All.addEventListener("click", () =>{
    const items = document.querySelectorAll(".item");
    items.forEach((item) => item.style.display = "block")
  });
  
  //---------------------------------- Apply on all the items:------------------------------
  document
    .querySelectorAll(".item")
    .forEach((item) => ExtensionEventListener(item));
});
