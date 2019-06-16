/**
 * Base Model
 * 
 * @author Raymond Nunez 
 */
System.Models.Base = function(ModelDefaults, ModelOptions, Callback = null) {
    // Reference to Base
    let _this = this;

    // Helpers
    var _commonHelper = new System.Helpers.Common();

    // Properties shared across all Models
    let BaseDefaults = {
        _uuid: _commonHelper.generateUUID(),
        _callback: Callback != null ? Callback : null
    };

    // Model constructor
    _this._construct = function() {
        _.extend(BaseDefaults, ModelDefaults);

        // Replace and/or add properties from our model options
        _.extend(BaseDefaults, ModelOptions);

        // Make each property in our base defaults into a property into this model
        for (let prop in BaseDefaults) { 
            if (BaseDefaults.hasOwnProperty(prop)) {
                //_this[prop] = BaseDefaults[prop];

                Object.defineProperty(_this, prop, {
                    value: BaseDefaults[prop],
                    writable: true,
                    configurable: true,
                    enumerable: true
                });
            }
        }
    };

    // Fire constructor
    _this._construct();

    // Fire callback if it is not null
    if (_this._callback != null) {
        _this._callback(_this);
    }

    Object.defineProperty(_this, '_construct', {
        enumerable: false,
        writable: false,
        configurable: false,
    });
};

System.Models.Record = function(Options, Callback = null){
    //System.Models.Base.call(this);
    System.Models.Base.call(
        this, 
        {
            ID: null,
            Name: null,
            Body: ""
        },
        Options,
        Callback
    );
};

System.Models.Record.prototype = Object.create(System.Models.Base.prototype);
System.Models.Record.prototype.constructor = System.Models.Record;

System.Models.Record.prototype.setName = (name) => {
    this.Name = name;
}

System.Models.Record.prototype.getName = () => {
    return this.Name;
}