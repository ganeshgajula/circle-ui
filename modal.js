const showModalBtn = document.querySelector(".show-modal-btn");
const modal = document.querySelector(".modal-container");
const modalPrimaryActionBtn = document.querySelector(
  ".modal-primary-action-btn"
);
const modalSecondaryActionBtn = document.querySelector(
  ".modal-secondary-action-btn"
);

modal.style.display = "none";

const displayModalHandler = () => {
  modal.style.display = "block";
};

const modalPrimaryActionHandler = () => {
  modal.style.display = "none";
};

const modalSecondaryActionHandler = () => {
  modal.style.display = "none";
};

showModalBtn.addEventListener("click", displayModalHandler);
modalPrimaryActionBtn.addEventListener("click", modalPrimaryActionHandler);
modalSecondaryActionBtn.addEventListener("click", modalSecondaryActionHandler);
