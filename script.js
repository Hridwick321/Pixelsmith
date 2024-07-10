function toggleFields() {
    var membership = document.getElementById('membership').value;
        var paymentOptions = document.getElementById('payment-options');
        var membershipIdGroup = document.getElementById('membership-id-group');


        if (membership === 'non-member') {
            paymentOptions.style.display = 'block';
            membershipIdGroup.style.display = 'none';
        } else {
            paymentOptions.style.display = 'none';
            membershipIdGroup.style.display = 'block';
        }
    }