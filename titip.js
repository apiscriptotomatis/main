    document.addEventListener("DOMContentLoaded", function() {
        var levelText = document.querySelector('.level-akun').textContent.trim();
        var accountTypeText = document.querySelector('.account-type').textContent.trim();
        if (accountTypeText === 'demo') {
            window.location.href = '../ex/Homepage.php';
        }
        if (accountTypeText === 'admin') {
            window.location.href = '../admin/';
        }
    });
