// scripts/features/soustraction.js - Développeur A
// Feature: Soustraction

/**
 * Effectue la soustraction de deux nombres (a - b)
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} Résultat de la soustraction
 */
function soustraction(a, b) {
    // Gestion des cas d'erreur
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        console.error('Soustraction: Paramètres invalides');
        return 0;
    }
    
    // Éviter les problèmes de virgule flottante
    const result = a - b;
    return Math.round(result * 1e12) / 1e12;
}

// Export pour utilisation dans calculator.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { soustraction };
}