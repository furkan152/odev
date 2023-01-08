const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickedImgIndex;

    gallery[i].onclick = () => {
      clickedImgIndex = i;
      function preview() {
        currentImg.textContent = newIndex + 1;
        let imageURL = gallery[newIndex].querySelector("img").src;
        previewImg.src = imageURL;
      }
      preview();

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};

//Form kontrol işlemi BAŞLANGIÇ

function validateForm() {
  var isValid = true;

  // Formdaki tüm alanları kontrol et
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      isValid = false;
      inputs[i].classList.add("error");
    } else {
      inputs[i].classList.remove("error");
    }
  }

  // Telefon alanını kontrol et
  var phoneInput = document.getElementById("phone");
  var phone = phoneInput.value;
  var phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    alert("Lütfen geçerli bir telefon numarası girin!");
    return false;
  }

  // Formda hata varsa uyarı mesajı göster
  if (!isValid) {
    alert("Lütfen tüm alanları doldurun!");
  }

  return isValid;
}

//Form kontrol işlemi BİTİŞ
