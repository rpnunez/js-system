System.Models = function(){};

/**
 * Base Model
 * 
 * @author Raymond Nunez 
 */
System.Models.Base = function(ModelDefaults, ModelOptions, Callback = null) {
    // Reference to Base
    var _this = this;

    // Properties shared across all Models
    var BaseDefaults = {
        _UUID: System.Helpers.Common.generateUUID(),
        _Callback: Callback != null ? Callback : null
    };

    // Model constructor
    _this._construct = function() {
        _.extend(BaseDefaults, ModelDefaults);

        // Replace and/or add properties from our model options
        _.extend(BaseDefaults, ModelOptions);

        console.log('#System.Models.Base: BaseDefaults: ', BaseDefaults);


        // Make each property in our base defaults into a property into this model
        for (var prop in BaseDefaults) { 
            if (BaseDefaults.hasOwnProperty(prop)) {
                //_this[prop] = BaseDefaults[prop];

                Object.defineProperty(_this, prop, {
                    value: BaseDefaults[prop],
                    writable: true,
                    configurable: true,
                    enumerable: true
                });

                console.log('#System.Models.Base: added property '+ prop +' to model ', _this);
            }
        }
    };

    console.log('#System.Models.Base: Copy of current model: ', BaseDefaults);

    // Fire constructor
    _this._construct();

    var _model = _.clone(_this);

    // Fire callback if it is truthy
    if (_this._Callback != null) {
        console.log('#System.Models.Base: Callback is not null, firing Callback...');

        _this._Callback(_this);
    } else {
        console.log('_this.Callback: ', _this._Callback +' is apparently null. Typeof: ', typeof _this._Callback)
    }

    console.log('Typeof _this._Callback: ', typeof _this._Callback)

    Object.defineProperty(_this, '_construct', {
        enumerable: false
    });
};

System.Models.Record = function(Options, Callback = null){
    //System.Models.Base.call(this);
    System.Models.Base.call(this, 
        {
            ID: null,
            Name: null,
            Body: ""
        },
        Options,
        Callback
    );

    //var _this = this;

    // this._construct(
    //     {
    //         Id: null,
    //         Name: null,
    //         Body: ""
    //     },
    //     Options,
    //     function() {
    //         _this._____xyz = null;
    //     }
    // );
};
System.Models.Record.prototype = Object.create(System.Models.Base.prototype);
System.Models.Record.prototype.constructor = System.Models.Record;

System.Models.Record.prototype.setName = (name) => {
    this.Name = name;
}

System.Models.Record.prototype.getName = () => {
    return this.Name;
}