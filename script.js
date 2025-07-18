'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.modal-overlay');
const btnsCloseModal = document.querySelectorAll('.close-btn');
const btnsOpenModal = document.querySelectorAll('.open-btn');

btnsOpenModal.forEach(item => item.addEventListener('click', openModal));
btnsCloseModal.forEach(item => item.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', escButtonCloseModal);

function openModal(event) {
  const modal = document.getElementById(event.target.dataset.modal);
  modal.classList.add('show');
  overlay.classList.add('show');
}

function closeModal() {
  modals.forEach(item => item.classList.remove('show'));
  overlay.classList.remove('show');
}

function escButtonCloseModal(event) {
  if (event.keyCode === 27 && overlay.classList.contains('show')) {
    closeModal();
  }
}
