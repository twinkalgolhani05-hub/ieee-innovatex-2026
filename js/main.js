/**
 * IEEE InnovateX 2026 - Interactive Logic
 * IEEE IAS & RAS Student Branch Chapters • MITS Gwalior
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   COUNTDOWN TIMER
   Target Event Date: October 24, 2026 09:30:00 IST
   -------------------------------------------------------------------------- */
function initCountdown() {
  const targetDate = new Date('2026-10-24T09:30:00+05:30').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   NAVBAR SCROLL SHADOW
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   MOBILE MENU DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

/* --------------------------------------------------------------------------
   SMOOTH SCROLLING WITH OFFSET
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   REGISTRATION MODAL & FORM LOGIC
   -------------------------------------------------------------------------- */
function openRegisterModal() {
  const modal = document.getElementById('registerModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeRegisterModal() {
  const modal = document.getElementById('registerModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close on backdrop click or ESC key
window.addEventListener('click', (e) => {
  const modal = document.getElementById('registerModal');
  if (e.target === modal) {
    closeRegisterModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRegisterModal();
  }
});

/* Form Submission Handler */
function handleRegistration(event) {
  event.preventDefault();

  // Clear errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('collegeError').textContent = '';
  document.getElementById('deptError').textContent = '';

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const college = document.getElementById('college').value.trim();
  const department = document.getElementById('department').value.trim();
  const track = document.getElementById('track').value;
  const ieeeId = document.getElementById('ieeeId').value.trim();

  let hasError = false;

  if (!fullName || fullName.length < 3) {
    document.getElementById('nameError').textContent = 'Please enter your full name (at least 3 characters).';
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    hasError = true;
  }

  if (!college) {
    document.getElementById('collegeError').textContent = 'Please provide your institution name.';
    hasError = true;
  }

  if (!department) {
    document.getElementById('deptError').textContent = 'Please provide your branch or department.';
    hasError = true;
  }

  if (hasError) return;

  // Generate unique pass ID
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `INX-2026-${randomNum}`;

  // Store in LocalStorage
  const registrationRecord = {
    ticketId,
    fullName,
    email,
    college,
    department,
    track,
    ieeeId,
    timestamp: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem('innovatex_registrations') || '[]');
    existing.push(registrationRecord);
    localStorage.setItem('innovatex_registrations', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage not accessible', e);
  }

  // Populate digital ticket view
  document.getElementById('ticketName').textContent = fullName;
  document.getElementById('ticketId').textContent = ticketId;
  document.getElementById('ticketCollege').textContent = college;

  const trackLabels = {
    both: 'Full Conclave Pass (Keynotes + Sprint)',
    robotics: 'Keynote 1: Autonomous Robotics (RAS)',
    automation: 'Keynote 2: Sustainable Power (IAS)'
  };
  document.getElementById('ticketTrack').textContent = trackLabels[track] || track;

  // Switch modal view to success
  document.getElementById('modalFormContainer').style.display = 'none';
  document.getElementById('modalSuccessContainer').style.display = 'block';

  showToast(`🎉 Registration Confirmed! Pass ID: ${ticketId}`);
}

function resetRegisterModal() {
  document.getElementById('registrationForm').reset();
  document.getElementById('modalFormContainer').style.display = 'block';
  document.getElementById('modalSuccessContainer').style.display = 'none';
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
