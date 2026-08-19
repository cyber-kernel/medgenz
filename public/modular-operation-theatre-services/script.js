document.addEventListener('DOMContentLoaded', () => {

    // 1. UNIVERSAL FAQ ACCORDION HANDLER
    window.toggleFaq = function(button) {
        const content = button.nextElementSibling;
        const isOpen = content?.classList.contains('open');
        const icon = button.querySelector('.faq-icon');
        
        document.querySelectorAll('.faq-content').forEach(el => {
            el.classList.remove('open');
        });
        document.querySelectorAll('.faq-icon').forEach(el => {
            el.classList.remove('rotate-180');
        });
        
        if(!isOpen && content) {
            content.classList.add('open');
            if(icon) icon.classList.add('rotate-180');
        }
    };

    // 2. CERTIFICATE LIGHTBOX LOGIC
    const certModal = document.getElementById('certModal');
    const certModalContent = document.getElementById('certModalContent');
    const certImage = document.getElementById('certImage');

    window.openCert = function(type) {
        let src = '';
        if(type === 'Udyam') src = 'images/certificates/udhyam.webp';
        if(type === 'ISO') src = 'images/certificates/iso-9001.webp';
        if(type === 'CE') src = 'images/certificates/ce-certified.webp';
        
        if(certImage) certImage.src = src;
        if(certModal) {
            certModal.classList.remove('hidden');
            requestAnimationFrame(() => {
                certModal.classList.remove('opacity-0');
                if(certModalContent) certModalContent.classList.remove('scale-95');
            });
        }
    };

    window.closeCert = function() {
        if(certModal) {
            certModal.classList.add('opacity-0');
            if(certModalContent) certModalContent.classList.add('scale-95');
            setTimeout(() => {
                certModal.classList.add('hidden');
            }, 300); 
        }
    };

    if(certModal) {
        certModal.addEventListener('click', function(e) {
            if(e.target === certModal) {
                window.closeCert();
            }
        });
    }

    // 3. SUCCESS MODAL CLOSER (GLOBAL)
    window.closeSuccessModal = function() {
        const modal = document.getElementById('successModal');
        const content = document.getElementById('successModalContent');
        if (modal) {
            modal.classList.add('opacity-0');
            if (content) content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 500);
        }
    };

    // 4. FORM SUBMISSION LOGIC
    const leadForm = document.getElementById('leadForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (leadForm) {
        leadForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            if(submitBtn) { 
                submitBtn.textContent = 'Submitting...'; 
                submitBtn.disabled = true; 
                submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
            }

            try {
                const formData = new URLSearchParams();
formData.append('Name', document.getElementById('fname').value);
formData.append('Email', document.getElementById('email').value);
formData.append('Phone', document.getElementById('phone').value);
formData.append('Designation', document.getElementById('designation').value);
formData.append('Hospital', document.getElementById('hospital').value);
formData.append('BedCount', document.getElementById('bedcount').value);
formData.append('Query', document.getElementById('query').value);
                
                await fetch('https://script.google.com/macros/s/AKfycbw7_orUG9qmqckWFpfc8DVbQoFIOFWWEKge0bKzDy7yXKQ8thFi4iugM9bWTIT8IXlQ/exec', { 
                    method: 'POST', body: formData 
                });

                // GTM Tracking Push with Google Ads Conversion
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'contact_form_submit',
                    'conversion_id': '17860249048',
                    'conversion_label': 'QGO9CKDgylMCENiLt8RC'
                });

                const successModal = document.getElementById('successModal');
                const successModalContent = document.getElementById('successModalContent');
                if(successModal) {
                    successModal.classList.remove('hidden');
                    setTimeout(() => { 
                        successModal.classList.remove('opacity-0'); 
                        if(successModalContent) successModalContent.classList.remove('scale-95'); 
                    }, 50);
                }
                
                leadForm.reset();
                
                // Timer to auto-close
                setTimeout(() => {
                    window.closeSuccessModal();
                }, 7000);

            } catch (err) {
                console.error("Submission error:", err);
                alert("Submission failed. Please call us directly.");
            } finally {
                if(submitBtn) { 
                    submitBtn.textContent = 'Submit Project Details'; 
                    submitBtn.disabled = false; 
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                }
            }
        });
    }

    // 5. HEADER SCROLL & FLOATING WIDGET
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 20) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.classList.add('shadow-soft');
                header.style.borderBottomColor = 'transparent';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.classList.remove('shadow-soft');
                header.style.borderBottomColor = 'rgba(33, 45, 69, 0.05)';
            }
        }
    }, { passive: true });

    const callWidget = document.getElementById('floatingCallWidget');
    if (callWidget) {
        callWidget.style.opacity = '1';
        callWidget.style.pointerEvents = 'auto';
    }

    // 6. DYNAMIC CSS GRID TEXT SWAPPER
    const swapContainer = document.getElementById('swapContainer');
    if(swapContainer) {
        const words = ["Manufacturer", "Supplier", "Dealer"];
        swapContainer.innerHTML = ''; 
        
        const dummy = document.createElement('span');
        dummy.className = 'swap-word';
        dummy.style.visibility = 'hidden';
        dummy.style.position = 'static'; 
        dummy.textContent = words.reduce((a, b) => a.length > b.length ? a : b);
        swapContainer.appendChild(dummy);

        const wordElements = words.map((word, index) => {
            const span = document.createElement('span');
            span.className = 'swap-word';
            if (index === 0) span.classList.add('active');
            span.textContent = word;
            swapContainer.appendChild(span);
            return span;
        });

        let currentIndex = 0;
        setInterval(() => {
            wordElements.forEach(el => el.classList.remove('exit'));
            wordElements[currentIndex].classList.remove('active');
            wordElements[currentIndex].classList.add('exit');
            currentIndex = (currentIndex + 1) % words.length;
            wordElements[currentIndex].classList.add('active');
        }, 3500);
    }

    // 7. CINEMATIC CROSSFADE ENGINE
    function startCrossfade(selector, duration) {
        const images = document.querySelectorAll(selector);
        if (images.length <= 1) return;
        
        let currentIdx = 0;
        images.forEach((img, i) => {
            if (i === 0) {
                img.style.zIndex = '2';
                img.classList.add('active');
            } else {
                img.style.zIndex = '0';
                img.classList.remove('active');
            }
        });

        setInterval(() => {
            let prevIdx = currentIdx;
            currentIdx = (currentIdx + 1) % images.length;
            
            images.forEach((img, i) => {
                if (i === currentIdx) {
                    img.style.zIndex = '2';
                    img.classList.add('active');
                } else if (i === prevIdx) {
                    img.style.zIndex = '1';
                    img.classList.remove('active');
                } else {
                    img.style.zIndex = '0';
                    img.classList.remove('active');
                }
            });
        }, duration);
    }
    
    startCrossfade('.hero-bg', 5500); 
    startCrossfade('.exc-bg', 4500);

    // 8. STAGGERED SCROLL REVEAL SYSTEM (THIS BRINGS SECTIONS BACK!)
    const revealElements = document.querySelectorAll('.reveal-up');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // 9. MOBILE 3D ECOSYSTEM CAROUSEL
    const carouselContainer = document.getElementById('ot-ecosystem-carousel');
    const otCards = Array.from(document.querySelectorAll('.ot-card'));
    
    if (carouselContainer && otCards.length > 0) {
        let activeIndex = 0;
        let carouselInterval;
        let isMobileCarousel = window.innerWidth < 768;

        function updateCarousel() {
            if (!isMobileCarousel) {
                otCards.forEach(c => c.className = c.className.replace(/card-(center|left|right|hidden-left|hidden-right)/g, '').trim());
                return;
            }
            
            const total = otCards.length;
            otCards.forEach((card, index) => {
                card.classList.remove('card-center', 'card-left', 'card-right', 'card-hidden-left', 'card-hidden-right');
                
                if (index === activeIndex) {
                    card.classList.add('card-center');
                } else if (index === (activeIndex - 1 + total) % total) {
                    card.classList.add('card-left');
                } else if (index === (activeIndex + 1) % total) {
                    card.classList.add('card-right');
                } else {
                    card.classList.add('card-hidden-right');
                }
            });
        }

        function nextCard() {
            activeIndex = (activeIndex + 1) % otCards.length;
            updateCarousel();
        }

        function prevCard() {
            activeIndex = (activeIndex - 1 + otCards.length) % otCards.length;
            updateCarousel();
        }

        function startAutoplay() {
            if (!isMobileCarousel) return;
            stopAutoplay();
            carouselInterval = setInterval(nextCard, 1300);
        }

        function stopAutoplay() {
            clearInterval(carouselInterval);
        }

        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', e => {
            if (!isMobileCarousel) return;
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay(); 
        }, {passive: true});

        carouselContainer.addEventListener('touchend', e => {
            if (!isMobileCarousel) return;
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 40) { 
                if (diff > 0) nextCard(); 
                else prevCard(); 
            }
            startAutoplay(); 
        }, {passive: true});

        otCards.forEach((card) => {
            card.addEventListener('click', () => {
                if (!isMobileCarousel) return;
                if (card.classList.contains('card-left')) {
                    stopAutoplay(); prevCard(); startAutoplay();
                } else if (card.classList.contains('card-right')) {
                    stopAutoplay(); nextCard(); startAutoplay();
                }
            });
        });

        window.addEventListener('resize', () => {
            const wasMobile = isMobileCarousel;
            isMobileCarousel = window.innerWidth < 768;
            
            if (wasMobile !== isMobileCarousel) {
                if (isMobileCarousel) {
                    activeIndex = 0;
                    updateCarousel();
                    startAutoplay();
                } else {
                    stopAutoplay();
                    updateCarousel(); 
                }
            }
        });

        if (isMobileCarousel) {
            updateCarousel();
            startAutoplay();
        }
    }

    // 10. INTERACTIVE JS TICKER FOR TESTIMONIALS
    function initInteractiveMarquee(containerId, speed, direction) {
        const row = document.getElementById(containerId);
        if (!row) return;

        let isPaused = false;
        let resumeTimeout;

        const handleUserInteraction = () => {
            isPaused = true;
            clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                isPaused = false;
            }, 1000); 
        };

        row.addEventListener('touchstart', () => { isPaused = true; clearTimeout(resumeTimeout); }, { passive: true });
        row.addEventListener('touchend', handleUserInteraction, { passive: true });
        row.addEventListener('mouseenter', () => { isPaused = true; clearTimeout(resumeTimeout); });
        row.addEventListener('mouseleave', handleUserInteraction);
        row.addEventListener('wheel', handleUserInteraction, { passive: true });

        if (direction === -1) {
            row.scrollLeft = row.scrollWidth / 2;
        }

        function tick() {
            if (!isPaused) {
                row.scrollLeft += speed * direction;
                
                if (direction === 1) { 
                    if (row.scrollLeft >= row.scrollWidth / 2) {
                        row.scrollLeft -= row.scrollWidth / 2;
                    }
                } else { 
                    if (row.scrollLeft <= 0) {
                        row.scrollLeft += row.scrollWidth / 2;
                    }
                }
            }
            requestAnimationFrame(tick);
        }
        
        requestAnimationFrame(tick);
    }
    
    initInteractiveMarquee('marquee-row-1', 1, 1);
    initInteractiveMarquee('marquee-row-2', 1, -1);

});