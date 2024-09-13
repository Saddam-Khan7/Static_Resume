(function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
        if (skillsSection) {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        }
    });
})();
