import {
    error,
    member
} from '../utils/utils';

import {
    pair,
    head,
    tail
} from '../pair/pair';

import {
    list
} from '../list/list';

const informAboutValue = (constraint) => {
    return constraint("I have a value.");
}

const informAboutNoValue = (constraint) => {
    return constraint("I lost my value.");
}

function forEachExcept(exception, fun, list) {
    function loop(items) {
        if (null === (items)) {
            return "done";
        } else if (head(items) === exception) {
            return loop(tail(items));
        } else {
            fun(head(items));
            return loop(tail(items));
        }
    }
    return loop(list);
}

const makeConnector = () => {
    let value = false;
    let informant = false;
    let constraints = null;
    const setMyValue = (newval, setter) => {
        if (!hasValue(me)) {
            value = newval;
            informant = setter;
            return forEachExcept(setter,
                                   informAboutValue,
                                   constraints);
        } else if (value !== newval) {
            error(list(value, newval), "contradiction");
        } else {
            return "ignored";
        }
    }

    const forgetMyValue = (retractor) => {
        if (retractor === informant) {
            informant = false;
            return forEachExcept(retractor,
                                   informAboutNoValue,
                                   constraints);
        } else {
            return "ignored";
        }
    }

    const connect = newConstraint => {
        if(null === (member(newConstraint, constraints))) {
            constraints = pair(newConstraint, constraints);
        } else {}
        if (hasValue(me)) {
            informAboutValue(newConstraint);
        } else {}
        return "done";
    }

    const me = (request) => {
        if (request === "has_value") {
            return informant !== false;
        } else if (request === "value") {
            return value;
        } else if (request === "set_value") {
            return setMyValue;
        } else if (request === "forget") {
            return forgetMyValue;
        } else if (request === "connect") {
            return connect;
        } else {
            error(request, "unknown operation -- connector");
        }
    }
    return me;
}

const hasValue = connector => {
    return connector("has_value");
}

const getValue = connector => {
    return connector("value");
}

const setValue = (connector,newValue,informant) => {
    return connector("set_value")(newValue, informant);
}

const forgetValue = (connector,retractor) => {
    return connector("forget")(retractor);
}

const connect = (connector,newConstraint) => {
    return connector("connect")(newConstraint);
}

const multiplier = (m1,m2,product) => {
    const processNewValue = () => {
        if ((hasValue(m1) && getValue(m1) === 0)
         || (hasValue(m2) && getValue(m2) === 0)) {
            setValue(product, 0, me);
        } else if (hasValue(m1) && hasValue(m2)) {
            setValue(product, getValue(m1) * getValue(m2), me);
        } else if (hasValue(product) && hasValue(m1)) {
            setValue(m2, getValue(product) / getValue(m1), me);
        } else if (hasValue(product) && hasValue(m2)) {
            setValue(m1, getValue(product) / getValue(m2), me);
        } else {}
    }
    function processForgetValue() {
        forgetValue(product, me);
        forgetValue(m1, me);
        forgetValue(m2, me);
        processNewValue();
    }
    function me(request) {
        if (request === "I have a value.") {
            processNewValue();
        } else if (request === "I lost my value.") {
            processForgetValue();
        } else {
            error(request, "unknown request -- multiplier");
        }
    }
    connect(m1, me);
    connect(m2, me);
    connect(product, me);
    return me;
}

const adder = (a1,a2,sum) => {

    const processNewValue = () => {
        if (hasValue(a1) && hasValue(a2)) {
            setValue(sum, getValue(a1) + getValue(a2), me);
        } else if (hasValue(a1) && hasValue(sum)) {
            setValue(a2, getValue(sum) - getValue(a1), me);
        } else if (hasValue(a2) && hasValue(sum)) {
            setValue(a1, getValue(sum) - getValue(a2), me);
        } else {}
    }

    const processForgetValue = () => {
        forgetValue(sum, me);
        forgetValue(a1, me);
        forgetValue(a2, me);
        processNewValue();
    }

    const me = (request) => {
        if (request === "I have a value.") {
            processNewValue();
        } else if (request === "I lost my value.") {
            processForgetValue();
        } else {
            error(request, "unknown request -- adder");
        }
    }

    connect(a1, me);
    connect(a2, me);
    connect(sum, me);
    return me;
}



const constant = (value,connector) => {
    const me = (request) => {
        error(request, "unknown request -- constant");
    }
    connect(connector, me);
    setValue(connector, value, me);
    return me;
}

const display = msg => console.log(msg)

function probe(name, connector) {
    const printProbe = (value) => {
        display("Probe: " + name + " = " + JSON.stringify(value));
    }
    function processNewValue() {
        printProbe(getValue(connector));
    }
    function processForgetValue() {
        printProbe("?");
    }
    function me(request) {
        return request === "I have a value."
               ? processNewValue()
               : request === "I lost my value."
               ? processForgetValue()
               : error(request, "unknown request -- probe");
    }
    connect(connector, me);
    return me;
}

const celsiusFahrenheitConverter = (c,f) => {
    const u = makeConnector();
    const v = makeConnector();
    const w = makeConnector();
    const x = makeConnector();
    const y = makeConnector();
    multiplier(c, w, u);
    multiplier(v, x, u);
    adder(v, y, f);
    constant(9, w);
    constant(5, x);
    constant(32, y);
    return "ok";
}

module.exports = {
    probe,
    celsiusFahrenheitConverter,
    makeConnector,
    setValue,
    forgetValue
}

