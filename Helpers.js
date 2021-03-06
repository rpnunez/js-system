System.Helpers.Common.prototype.generateUUID = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

/**
 * Constructor
 */
System.Helpers.Logger = function() {
    
    this.log = function(data) {
        console.log(data);
    }

    return this;
}

// System.Helpers.Logger.prototype.log = function(data) {
//     console.log(data);
// }