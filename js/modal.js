
    const OpenPopup = document.querySelector(".button--contacts");
    const Popup = document.querySelector(".popup");
    const PopupClose = document.querySelector(".popup__close");
    const FormName = document.querySelector(".feedback__input");
    const PopupForm = document.querySelector(".feedback");
    const FormEmail = document.querySelector(".feedback__input")

    let isStorageSupport = true;
    let storage = "";

    try {
      storage = localStorage.getItem("FormName");
    } catch (err){
      isStorageSupport = false;
    }

    OpenPopup.addEventListener("click", function (evt) {
      evt.preventDefault();
      Popup.classList.add("popup-show");
      if (storage) {
        FormName.value = storage;
        FormEmail.focus();
      } else {
        FormName.focus();
      }
    });

    PopupClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      Popup.classList.remove("popup-show");
      Popup.classList.remove("popup-error");
    });

    PopupForm.addEventListener("submit", function (evt) {
      if (!FormName.value || !FormEmail.value) {
        evt.preventDefault();
        Popup.classList.remove("popup-error");
        Popup.offsetWidth = Popup.offsetWidth;
        Popup.classList.add("popup-error");

      } else {
        if(isStorageSupport) {
          localStorage.setItem("FormName", FormName.value);
       }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (Popup.classList.contains("popup-show")) {
          evt.preventDefault();
          Popup.classList.remove("popup-show");
          Popup.classList.remove("popup-error");
        }
      }
    });
