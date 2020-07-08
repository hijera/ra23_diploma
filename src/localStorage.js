import  Joi  from '@hapi/joi';

export const saveState = (name,state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(name, serializedState);
    } catch {
        // ignore write errors
    }
};


export const loadState = (name,defval=null) => {
    try {
        const serializedState = localStorage.getItem(name);
        if (serializedState === null ) {
            return defval;
        }
        if (!validateSchema(JSON.parse(serializedState)))
        {
            return defval;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defval;
    }
};

function validateSchema(data) {
    const schema = Joi.array().items(Joi.object({
        count:Joi.number().required(),
        title:Joi.string().required(),
        size:Joi.string().required(),
        price:Joi.number().required(),
        id:Joi.number().required(),
    }));
    const validation=schema.validate(data);
    if (validation.error)
    {
        return false;
    }
    else
    {
        return true;
    }
};