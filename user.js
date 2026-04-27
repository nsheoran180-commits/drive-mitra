async function bookRide() {
    const btn = document.getElementById('book-btn');
    const msg = document.getElementById('msg');
    
    // इनपुट से डेटा लेना
    const uName = document.getElementById('name').value;
    const uPhone = document.getElementById('phone').value;
    const uPickup = document.getElementById('pickup').value;
    const uDrop = document.getElementById('drop').value;

    // चेक करें कि कोई बॉक्स खाली तो नहीं है
    if(!uName ||!uPhone ||!uPickup ||!uDrop) {
        alert("Please fill all details!");
        return;
    }

    btn.innerText = "Booking...";
    btn.disabled = true;

    const newBooking = {
        name: uName,
        phone: uPhone,
        pickup_location: uPickup,
        drop_location: uDrop,
        time: new Date().toLocaleTimeString(), // अपने आप टाइम लेगा
        status: "pending",
        driver: null
    };

    // Supabase में डेटा डालना (100% सही तरीका)
    const { error } = await supabaseClient.from('bookings').insert(newBooking);

    if (error) {
        msg.style.color = "#ff4d4d";
        msg.innerText = "Error: " + error.message;
        btn.innerText = "Book Now";
        btn.disabled = false;
    } else {
        msg.style.color = "#28a745";
        msg.innerText = "Booking Successful! Our driver will call you soon.";
        // फॉर्म खाली करना
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('pickup').value = '';
        document.getElementById('drop').value = '';
        btn.innerText = "Book Now";
        btn.disabled = false;
    }
}
