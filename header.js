document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mobileMenu = document.querySelector('.mobile-menu');
            const closeMenuBtn = document.querySelector('.close-menu-btn');
            const overlay = document.querySelector('.overlay');

            if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.add('active');
                    if (overlay) {
                        overlay.classList.add('active');
                    }
                });

                closeMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    if (overlay) {
                        overlay.classList.remove('active');
                    }
                });

                if (overlay) {
                    overlay.addEventListener('click', function() {
                        mobileMenu.classList.remove('active');
                        overlay.classList.remove('active');
                    });
                }
            }

            // Mobile Dropdown Toggle for "Shop"
            const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
            const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');

            if (mobileDropdownToggle && mobileDropdownMenu) {
                mobileDropdownToggle.addEventListener('click', function() {
                    mobileDropdownMenu.classList.toggle('active');
                    // Optional: Rotate the arrow icon
                    this.querySelector('.arrow').classList.toggle('rotate');
                });
            }
        });