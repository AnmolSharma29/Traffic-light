function getForm() {
    console.log('Submit function called');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const complaint = document.getElementById('complainid').value;
    const landmark = document.getElementById('landmark').value;
    console.log('Items selected');

    const complaintObject = {
        name: name,
        phone: phone,
        complaint: complaint,
        landmark: landmark
    };
    console.log(complaintObject);
};