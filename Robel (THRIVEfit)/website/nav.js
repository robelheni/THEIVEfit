function Navbar() {
    return `<nav>
        <a href="index.html">Home</a>
        <a href="classes.html">Classes</a>
        <a href="trainers.html">Trainers</a>
        <a href="pricing.html">Pricing</a>
        <a href="contact.html">Contact</a>
    </nav>`;
}

var navbar = Navbar();
document.writeln(navbar);



function Footer() {
    return `
        <footer class="footer">
            <div class="section__container footer__container">
                <div class="footer__col">
                    <div class="footer__logo">
                        <a href="#"><img src="assets/logoo.png" alt="logo" />THRIVEfit</a>
                    </div>
                    <p>
                        Take the first step towards a healthier, stronger you with our
                        unbeatable pricing plans. Let's sweat, achieve, and conquer
                        together!
                    </p>
                    <div class="footer__socials">
                        <a href="#"><i class="ri-facebook-fill"></i></a>
                        <a href="#"><i class="ri-instagram-line"></i></a>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                    </div>
                </div>
                <div class="footer__col">
                    <h4>Company</h4>
                    <div class="footer__links">
                        <a href="#">Business</a>
                        <a href="#">Franchise</a>
                        <a href="#">Partnership</a>
                        <a href="#">Network</a>
                    </div>
                </div>
                <div class="footer__col">
                    <h4>About Us</h4>
                    <div class="footer__links">
                        <a href="#">Blogs</a>
                        <a href="#">Security</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <div class="footer__col">
                    <h4>Contact</h4>
                    <div class="footer__links">
                        <a href="contact.html">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">BMI Calculator</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function anOffer(){
    var currdate = new Date()
    var currday = currdate.getDay()
    if (currday == 0){ document.writeln ("Sunday . <span class=open>Opening Times</span> . 10:00 AM - 4:00 PM")}
    if (currday == 1){ document.writeln("Monday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
    if (currday == 2){ document.writeln("Tuesday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
    if (currday == 3){ document.writeln("Wednesday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
    if (currday == 4){ document.writeln("Tursady . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
    if (currday == 5){ document.writeln("Friday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
    if (currday == 6){ document.writeln("Saturday . <span class=open>Opening Times</span> . 6:00 AM - 8:00 PM")}
    return day
    
}