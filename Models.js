System.Models = function(){};

System.Models.Base = function() {
    // Reference to Base
    var _this = this;

    // Properties shared across all Models
    var BaseDefaults = {
        uuid: System.Helpers.Common.generateUUID()
    };

    // Model constructor
    this._construct = function(ModelDefaults, ModelOptions, Callback = null) {
        _.extend(BaseDefaults, ModelDefaults);

        // Replace and/or add properties from our model options
        _.extend(BaseDefaults, ModelOptions);

        // Make each property in our base defaults into a property into this model
        for (var i in BaseDefaults) { 
            if (BaseDefaults.hasOwnProperty(i)) {
                _this[i] = BaseDefaults[i];
            }
        }

        // Fire callback if it is truthy
        Callback && Callback();
    };

    Object.defineProperty(this, '_construct', {
        enumerable: false
    });
};

System.Models.Record = function(Options){
    System.Models.Base.call(this);

    var _this = this;

    this._construct(
        {
            Id: null,
            Name: null,
            Body: ""
        },
        Options,
        function() {
            _this._____xyz = null;
        }
    );
};
System.Models.Record.prototype = Object.create(System.Models.Base.prototype);
System.Models.Record.prototype.constructor = System.Models.Record;