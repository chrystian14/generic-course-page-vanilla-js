function handleModal() {
  const modalController = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".modal__close-btn");

  const headerActionBtn = document.querySelector("#headerActionBtn");
  const faqActionBtn = document.querySelector("#faqActionBtn");

  const openModalBtns = [headerActionBtn, faqActionBtn];

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalController.showModal();
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modalController.close();
  });
}

handleModal();
