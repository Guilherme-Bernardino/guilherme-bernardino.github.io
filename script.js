function navigateTo(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const slot = document.querySelector(`.slot[onclick="navigateTo('${sectionId}')"]`);
    const slotPosition = slot.offsetLeft;
    document.querySelector('.active-indicator').style.left = `${slotPosition + 25}px`;
}

document.addEventListener("DOMContentLoaded", function() {
    navigateTo('about');
});
