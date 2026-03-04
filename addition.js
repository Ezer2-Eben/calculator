// scripts/features/addition.js - Développeur A
// Feature: Addition

/**
 * Effectue l'addition de deux nombres
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} Résultat de l'addition
 */
function addition(a, b) {
    // Gestion des cas d'erreur
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        console.error('Addition: Paramètres invalides');
        return 0;
    }
    
    // Éviter les problèmes de virgule flottante
    const result = a + b;
    return Math.round(result * 1e12) / 1e12;
}

// Export pour utilisation dans calculator.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addition };
}