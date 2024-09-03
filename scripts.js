document.querySelectorAll('.personal-name').forEach(function(element) {
    element.addEventListener('click', function() {
        alert('This is a personal name: ' + this.innerText);
    });
});

