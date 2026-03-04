// scripts/features/division.js - Développeur B
// Feature: Division

/**
 * Effectue la division de deux nombres (a / b)
 * @param {number} a - Numérateur
 * @param {number} b - Dénominateur
 * @returns {number|string} Résultat de la division ou message d'erreur
 */
function division(a, b) {
    // Gestion des cas d'erreur
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        console.error('Division: Paramètres invalides');
        return 0;
    }
    
    // Gestion de la division par zéro
    if (b === 0) {
        if (a === 0) return 'Indéterminé';
        return 'Infini';
    }
    
    // Éviter les problèmes de virgule flottante
    const result = a / b;
    return Math.round(result * 1e12) / 1e12;
}

// Export pour utilisation dans calculator.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { division };
}