import { Phone, Mail, Instagram } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                {/* Map Section */}
                <div id='about' className="map-section">
                    <h1>LOKASI KAMI</h1>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.352786946734!2d114.32383637509773!3d-8.267639783091147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151be038d2511%3A0x714c6b2576813611!2sKreasi%20Studio!5e0!3m2!1sid!2sid!4v1731399231506!5m2!1sid!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kreasi Studio Production"
                    ></iframe>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col items-center gap-8 mt-8">
                    {/* Contact Section */}
                    <div className="contact-section">
                        <Phone className="icon" />
                        <div>
                            <p>+62-8525-8298-299</p>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="email-section">
                        <Mail className="icon" />
                        <div>
                            <a href="mailto:kreasistudio99@gmail.com">
                            kreasistudio99@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Instagram Section */}
                    <div className="instagram-section">
                        <Instagram className="icon" />
                        <div>
                            <a
                                href="https://instagram.com/kreasi.production04"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @kreasi.production04
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-sm">
                    <p>&copy; GISKA ANANDA PUTRI_STIKOM PGRI BANYUWANGI.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer