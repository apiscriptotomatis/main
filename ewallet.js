function saveToFavorite() {
    var phoneNumberInput = document.getElementById('id');
    var phoneNumber = phoneNumberInput.value;

    if (phoneNumber.trim() !== "") {
        var savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];
        
        // Check if the number already exists in the saved numbers
        if (!savedNumbers.includes(phoneNumber)) {
            savedNumbers.push(phoneNumber);
            localStorage.setItem('savedNumbers', JSON.stringify(savedNumbers));
            Swal.fire({
                icon: 'success',
                text: 'Nomor Tersimpan!',
                showConfirmButton: false,
                timer: 1500
            });
            displaySavedNumbers();
            phoneNumberInput.value = "";
        } else {
            Swal.fire({
                icon: 'info',
                text: 'Nomor Sudah ada!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

  function displaySavedNumbers() {
   var savedNumbersList = document.getElementById('savedNumbersList');
   savedNumbersList.innerHTML = "";
   var savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];

   if (savedNumbers.length === 0) {
    // Jika belum ada nomor tersimpan
    var infoMessage = document.createElement('p');
    infoMessage.textContent = 'Belum ada nomor tersimpan.';
    savedNumbersList.appendChild(infoMessage);
   } else {
    savedNumbers.forEach(function (number) {
     var listItem = document.createElement('li');
     listItem.textContent = number;

     listItem.classList.add('saved-number-item');

     var checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     checkbox.value = number;

     checkbox.classList.add('checkbox');
     checkbox.addEventListener('click', function (event) {
      event.stopPropagation();
     });

     listItem.appendChild(checkbox);

     listItem.addEventListener('click', function () {
      copyToClipboard(number);
     });
     savedNumbersList.appendChild(listItem);
    });
   }
  }
  // Function to copy a text to clipboard
  function copyToClipboard(text) {
   var textArea = document.createElement('textarea');
   textArea.value = text;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);
   Swal.fire({
    icon: 'success',
    text: 'Nomor Disalin!',
    showConfirmButton: false,
    timer: 1500
   });
  }

  // Function to delete selected numbers
  function deleteSelected() {
   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   var savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];

   if (checkboxes.length > 0) {
    Swal.fire({
     text: 'Anda yakin ingin menghapus nomor terpilih?',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#d33',
     cancelButtonColor: '#3085d6',
     confirmButtonText: 'Ya, hapus!',
     cancelButtonText: 'Batal'
    }).then((result) => {
     if (result.isConfirmed) {
      checkboxes.forEach(function (checkbox) {
       var value = checkbox.value;
       savedNumbers = savedNumbers.filter(function (number) {
        return number !== value;
       });
      });

      localStorage.setItem('savedNumbers', JSON.stringify(savedNumbers));
      displaySavedNumbers();

      Swal.fire({
       icon: 'success',
       text: 'Nomor Terpilih dihapus',
       showConfirmButton: false,
       timer: 1500
      });
     }
    });
   } else {
    Swal.fire({
     icon: 'info',
     text: 'Pilih nomor untuk dihapus',
     showConfirmButton: false,
     timer: 1500
    });
   }
  }

  displaySavedNumbers();
