function redirectToPage() {
                const select = document.getElementById("project-select");
                const selectedValue = select.value;
                if (selectedValue) {
                    window.location.href = selectedValue; // Redirect to the selected link
                }
            }
