/* APG Recycling Centralized UI Components System */

const APG_COMPONENTS = {
  header(activePage = 'home') {
    const navItems = [
      { id: 'home', label: 'Home', href: 'index.html' },
      { id: 'about', label: 'About Us', href: 'about.html' },
      { id: 'products', label: 'Scrap Materials', href: 'products.html' },
      { id: 'services', label: 'Services', href: 'services.html' },
      { id: 'contact', label: 'Contact Us', href: 'contact.html' },
    ];

    const desktopNav = navItems.map(item => {
      const isActive = item.id === activePage || (activePage === 'products' && item.id === 'products') || (activePage === 'services' && item.id === 'services');
      const cls = isActive ? 'text-brand-700 font-bold border-b-2 border-brand-700 py-1' : 'text-slate-600 hover:text-brand-700 transition py-1';
      return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
    }).join('\n');

    const mobileNav = navItems.map(item => {
      const isActive = item.id === activePage || (activePage === 'products' && item.id === 'products') || (activePage === 'services' && item.id === 'services');
      const cls = isActive ? 'block font-bold text-brand-700 py-2.5 px-3 bg-brand-50 rounded-lg' : 'block font-bold text-slate-800 hover:text-brand-700 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition border-b border-slate-100';
      return `<a href="${item.href}" @click="mobileMenuOpen = false" class="${cls}">${item.label}</a>`;
    }).join('\n');

    return `
  <!-- Centralized Top Announcement Bar & Header -->
  <header class="w-full">
    <div class="bg-slate-100 text-slate-700 text-xs py-2 px-3 border-b border-slate-200">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
        <div class="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-700 shrink-0"></i>
          <span class="font-medium text-slate-800">Pioneer Centre #01-11, SG 627605</span>
          <span class="hidden md:inline text-slate-300">|</span>
          <span class="hidden sm:inline text-slate-600">UEN 201436195N • Scrap Merchant</span>
        </div>
        <div class="flex items-center justify-center gap-3 text-[11px] sm:text-xs">
          <a href="tel:+6566943394" class="hover:text-brand-700 transition flex items-center gap-1 font-semibold text-slate-900 whitespace-nowrap">
            <i data-lucide="phone" class="w-3.5 h-3.5 text-accent-600 shrink-0"></i>
            <span class="whitespace-nowrap">+65 6694 3394</span>
          </a>
          <a href="https://wa.me/6566943394" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-2 py-0.5 rounded text-[11px] flex items-center gap-1 transition shadow-sm whitespace-nowrap">
            <i data-lucide="message-square" class="w-3 h-3 shrink-0"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header (Light Theme) -->
    <nav class="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 shadow-sm" x-data="{ mobileMenuOpen: false }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-20">
          
          <a href="index.html" class="flex items-center gap-2 sm:gap-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-md shrink-0">
              <i data-lucide="recycle" class="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300"></i>
            </div>
            <div>
              <span class="block font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900 leading-none sm:leading-tight">APG RECYCLING</span>
              <span class="block text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-700">Pte Ltd • Pioneer Centre SG</span>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <div class="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            ${desktopNav}
          </div>

          <!-- Header CTA -->
          <div class="hidden lg:flex items-center gap-3">
            <button @click="openModal('Header Quote Request')" class="accent-gradient text-white font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition flex items-center gap-2">
              <i data-lucide="phone-call" class="w-4 h-4"></i> Get Instant Quote
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="flex lg:hidden items-center">
            <button @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle navigation menu" class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none touch-target">
              <i data-lucide="menu" x-show="!mobileMenuOpen" class="w-6 h-6"></i>
              <i data-lucide="x" x-show="mobileMenuOpen" class="w-6 h-6" x-cloak></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu drawer -->
      <div x-show="mobileMenuOpen" x-transition x-cloak class="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
        ${mobileNav}
        <div class="pt-2 flex flex-col gap-2">
          <button @click="openModal('Mobile Drawer Quote'); mobileMenuOpen = false" class="w-full accent-gradient text-white font-bold py-3 rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-sm">
            <i data-lucide="phone-call" class="w-4 h-4"></i> Get Instant Scrap Quote
          </button>
        </div>
      </div>
    </nav>
  </header>`;
  },

  modal() {
    return `
  <!-- Centralized Quote Modal Component -->
  <div x-show="isOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" x-transition>
    <div @click.away="closeModal()" class="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl relative border border-slate-200 my-auto">
      <button @click="closeModal()" aria-label="Close modal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 touch-target">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>

      <div class="mb-5 space-y-1 pr-6 text-left">
        <span class="text-[11px] font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2.5 py-0.5 rounded border border-brand-100 inline-block">Fast Response Guaranteed</span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">Request Scrap Quote</h3>
        <p class="text-slate-600 text-xs truncate" x-text="'Inquiry: ' + itemTitle"></p>
      </div>

      <form @submit.prevent="submitQuote()" class="space-y-4 text-left">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name / Company Name *</label>
          <input type="text" x-model="fullName" required class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm focus:ring-2 focus:ring-brand-700 outline-none" placeholder="e.g. John Tan / ABC Construction">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp *</label>
            <input type="tel" x-model="phone" required class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm focus:ring-2 focus:ring-brand-700 outline-none" placeholder="+65 9123 4567">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input type="email" x-model="email" class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm focus:ring-2 focus:ring-brand-700 outline-none" placeholder="john@example.com">
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Scrap Material Category</label>
          <select x-model="metalType" class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm focus:ring-2 focus:ring-brand-700 outline-none bg-white">
            <option>Copper & Cable Wires</option>
            <option>Aluminum Extrusions / Sheet</option>
            <option>Brass & Alloys</option>
            <option>Stainless Steel 304/316</option>
            <option>Ferrous Steel Plates / Beams</option>
            <option>Machinery / Motors / Compressors</option>
            <option>Demolition Project Scrap</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Estimated Weight (kg/tons) or Notes</label>
          <textarea x-model="notes" rows="2" class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm focus:ring-2 focus:ring-brand-700 outline-none" placeholder="Provide approximate weight, location, or notes..."></textarea>
        </div>

        <button type="submit" class="w-full accent-gradient text-white font-bold py-3 rounded-xl shadow-md hover:brightness-110 transition text-sm flex items-center justify-center gap-2">
          <i data-lucide="send" class="w-4 h-4"></i> Submit Quote Request
        </button>
      </form>
    </div>
  </div>`;
  },

  mobileBar() {
    return `
  <!-- Centralized Mobile Floating Sticky Quick Action Bar -->
  <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl flex items-center justify-around gap-2">
    <a href="tel:+6566943394" class="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition shadow-sm touch-target">
      <i data-lucide="phone" class="w-4 h-4 text-brand-700"></i> Call Us
    </a>
    <a href="https://wa.me/6566943394" target="_blank" class="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-sm touch-target">
      <i data-lucide="message-square" class="w-4 h-4"></i> WhatsApp
    </a>
    <button @click="openModal('Mobile Bar Quote')" class="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 accent-gradient text-white font-bold rounded-xl text-xs transition shadow-sm touch-target">
      <i data-lucide="file-text" class="w-4 h-4"></i> Get Quote
    </button>
  </div>`;
  },

  footer() {
    return `
  <!-- Centralized Shared Footer -->
  <footer class="bg-slate-100 text-slate-700 text-xs pt-12 sm:pt-16 pb-8 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-200">
        
        <!-- Col 1: Brand Info -->
        <div class="space-y-3 sm:space-y-4 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-2">
            <div class="w-9 h-9 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-lg">
              <i data-lucide="recycle" class="w-5 h-5"></i>
            </div>
            <span class="font-extrabold text-slate-900 text-lg tracking-tight">APG RECYCLING</span>
          </div>
          <p class="text-slate-600 text-xs leading-relaxed">
            APG Recycling Pte. Ltd. (UEN: 201436195N) is Singapore's premier scrap metal merchant in Pioneer Centre. Highest market payout rates for copper, brass, aluminum, steel, and cables.
          </p>
          <div class="text-[11px] text-brand-700 font-bold">
            ISRI International Standard Compliant • Pioneer Centre SG
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="space-y-3 text-center sm:text-left">
          <h4 class="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul class="space-y-2 text-slate-600">
            <li><a href="index.html" class="hover:text-brand-700 transition">Home Page</a></li>
            <li><a href="about.html" class="hover:text-brand-700 transition">About APG Recycling</a></li>
            <li><a href="products.html" class="hover:text-brand-700 transition">Scrap Materials Catalog</a></li>
            <li><a href="services.html" class="hover:text-brand-700 transition">Recycling & Demolition Services</a></li>
            <li><a href="contact.html" class="hover:text-brand-700 transition">Contact & Facility Map</a></li>
          </ul>
        </div>

        <!-- Col 3: Materials -->
        <div class="space-y-3 text-center sm:text-left">
          <h4 class="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Scrap Categories</h4>
          <ul class="space-y-2 text-slate-600">
            <li><a href="product-copper-scrap.html" class="hover:text-brand-700 transition">Copper Wire & Millberry</a></li>
            <li><a href="product-cables-wire.html" class="hover:text-brand-700 transition">Industrial Cable Scrap</a></li>
            <li><a href="product-aluminum-scrap.html" class="hover:text-brand-700 transition">Aluminum Extrusions & Sheet</a></li>
            <li><a href="product-ferrous-steel.html" class="hover:text-brand-700 transition">Heavy Ferrous Steel & Plates</a></li>
            <li><a href="product-stainless-steel.html" class="hover:text-brand-700 transition">Stainless Steel 304 / 316</a></li>
            <li><a href="product-machinery-motors.html" class="hover:text-brand-700 transition">Heavy Machinery & Motors</a></li>
          </ul>
        </div>

        <!-- Col 4: Warehouse Facility -->
        <div class="space-y-3 text-center sm:text-left">
          <h4 class="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Pioneer Facility</h4>
          <p class="text-slate-600 leading-relaxed">
            No 1 Soon Lee Street, #01-11 Pioneer Centre, Singapore 627605
          </p>
          <div class="space-y-1.5 pt-1">
            <a href="tel:+6566943394" class="block font-bold text-slate-900 hover:text-brand-700 transition flex items-center justify-center sm:justify-start gap-1.5">
              <i data-lucide="phone" class="w-4 h-4 text-brand-700"></i> <span class="whitespace-nowrap">+65 6694 3394</span>
            </a>
            <a href="mailto:sales@apgrecycling.com.sg" class="block font-semibold text-slate-700 hover:text-brand-700 transition flex items-center justify-center sm:justify-start gap-1.5">
              <i data-lucide="mail" class="w-4 h-4 text-brand-700"></i> sales@apgrecycling.com.sg
            </a>
          </div>
        </div>

      </div>

      <div class="pt-8 text-center text-slate-500 text-[11px] space-y-2">
        <p>© 2026 APG Recycling Pte Ltd (UEN 201436195N). All rights reserved. Pioneer Centre Singapore.</p>
      </div>
    </div>
  </footer>`;
  }
};

function renderApgComponents() {
  // 1. Header
  const headerEl = document.getElementById('apg-header') || document.querySelector('header');
  if (headerEl) {
    const activePage = headerEl.getAttribute('data-active') || 
      (location.pathname.includes('about') ? 'about' : 
       (location.pathname.includes('product') ? 'products' : 
        (location.pathname.includes('service') ? 'services' : 
         (location.pathname.includes('contact') ? 'contact' : 'home'))));
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = APG_COMPONENTS.header(activePage);
    headerEl.replaceWith(wrapper.firstElementChild);
  }

  // 2. Quote Modal
  const modalEl = document.getElementById('apg-modal');
  if (modalEl) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = APG_COMPONENTS.modal();
    modalEl.replaceWith(wrapper.firstElementChild);
  }

  // 3. Mobile Action Bar
  const barEl = document.getElementById('apg-mobile-bar');
  if (barEl) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = APG_COMPONENTS.mobileBar();
    barEl.replaceWith(wrapper.firstElementChild);
  }

  // 4. Shared Footer
  const footerEl = document.getElementById('apg-footer') || document.querySelector('footer');
  if (footerEl) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = APG_COMPONENTS.footer();
    footerEl.replaceWith(wrapper.firstElementChild);
  }

  // Re-initialize Lucide Icons for injected components
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// Render components immediately when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApgComponents);
} else {
  renderApgComponents();
}
