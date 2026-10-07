/* APG Recycling Main Application Script */

document.addEventListener('DOMContentLoaded', () => {
  console.log('APG Recycling Website Initialized');
});

// Quote Modal Handler
window.apgQuoteModal = function() {
  return {
    isOpen: false,
    itemTitle: '',
    fullName: '',
    phone: '',
    email: '',
    metalType: 'Copper / Non-Ferrous',
    notes: '',
    submitted: false,

    openModal(title = 'General Scrap Inquiry') {
      this.itemTitle = title;
      this.isOpen = true;
      this.submitted = false;
      document.body.style.overflow = 'hidden';
    },

    closeModal() {
      this.isOpen = false;
      document.body.style.overflow = '';
    },

    submitQuote() {
      if (!this.fullName || !this.phone) {
        alert('Please fill in your name and phone number so our team can reach out to you.');
        return;
      }
      this.submitted = true;
      setTimeout(() => {
        alert(`Thank you, ${this.fullName}! Your scrap metal valuation request for ${this.itemTitle} has been submitted. Our team will contact you at ${this.phone} shortly.`);
        this.isOpen = false;
        this.submitted = false;
        document.body.style.overflow = '';
      }, 800);
    }
  };
};

// Filterable Product Showcase Component
window.apgProductsFilter = function() {
  return {
    activeCategory: 'all',
    searchQuery: '',
    
    setCategory(cat) {
      this.activeCategory = cat;
    },

    matchesCategory(category) {
      if (this.activeCategory === 'all') return true;
      return this.activeCategory === category;
    },

    matchesSearch(title, text) {
      if (!this.searchQuery.trim()) return true;
      const q = this.searchQuery.toLowerCase();
      return title.toLowerCase().includes(q) || text.toLowerCase().includes(q);
    }
  };
};
