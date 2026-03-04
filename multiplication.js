// scripts/features/multiplication.js - Développeur B
// Feature: Multiplication

/**
 * Effectue la multiplication de deux nombres
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} Résultat de la multiplication
 */
function multiplication(a, b) {
    // Gestion des cas d'erreur
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        console.error('Multiplication: Paramètres invalides');
        return 0;
    }
    
    // Gestion de la multiplication par zéro
    if (a === 0 || b === 0) return 0;
    
    // Éviter les problèmes de virgule flottante
    const result = a * b;
    return Math.round(result * 1e12) / 1e12;
}

// Export pour utilisation dans calculator.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { multiplication };
}