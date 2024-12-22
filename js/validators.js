// Form validation utilities
const validators = {
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPhone: (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    },

    isValidYear: (year) => {
        const currentYear = new Date().getFullYear();
        return year >= 1950 && year <= currentYear;
    },

    sanitizeInput: (input) => {
        return input.replace(/[<>]/g, '');
    },

    validateForm: (formData) => {
        const errors = [];

        if (!formData.firstName || !formData.lastName) {
            errors.push('Full name is required');
        }

        if (!validators.isValidEmail(formData.email)) {
            errors.push('Invalid email address');
        }

        if (formData.phone && !validators.isValidPhone(formData.phone)) {
            errors.push('Invalid phone number');
        }

        if (!validators.isValidYear(parseInt(formData.graduationYear))) {
            errors.push('Invalid graduation year');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
};