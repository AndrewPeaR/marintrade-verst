document.addEventListener('DOMContentLoaded', function() {
    // это то модальное окно, с которым и будем работать
    const modalForm = document.querySelector('#modalForm')
    // обработчик на кнопку для открытия модалки
    document.querySelector('#openModalForm').addEventListener('click', openModal);

    function openModal() {
        modalForm.classList.add('modal-form_open');
        // обработчики событий, которые работают, когда окно открыто
        attachModalEvents();
    }

    function attachModalEvents() {
        // закрывать модальное окно при нажатии на крестик
        modalForm.querySelector('#closeModalForm').addEventListener('click', closeModal);
        // закрывать модальное окно при клике вне контента модального окна
        modalForm.addEventListener('click', handleOutside);
        // закрывать модальное окно при нажатии клавиши Escape
        document.addEventListener('keydown', handleEscape);
    }
    function closeModal() {
        modalForm.classList.remove('modal-form_open');
        // окно закрыто, эти обработчики событий больше не нужны
        detachModalEvents();
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-form__body');
        if (!isClickInside) {
            closeModal();
        }
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function detachModalEvents() {
        modalForm.querySelector('#closeModalForm').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modalForm.removeEventListener('click', handleOutside);
    }
});