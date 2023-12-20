function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector('.modal-content');
  
    modal.style.display = 'block';
  
    // Eltávolítja a zárás animációt (ha esetleg még rajta van)
    modalContent.classList.remove('fade-out');
  
    // Hozzáadja a nyitási animációt
    setTimeout(function () {
      modalContent.classList.add('fade-in');
    }, 10); // Kis időzítés a stílusok beállításához
}
  
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector('.modal-content');
  
    // Eltávolítja a nyitási animációt (ha esetleg még rajta van)
    modalContent.classList.remove('fade-in');
  
    // Hozzáadja a zárás animációt
    modalContent.classList.add('fade-out');
  
    setTimeout(function () {
      modal.style.display = 'none';
    }, 300); // Animáció időzítése, hogy a modal eltűnjön az animáció után
}
  