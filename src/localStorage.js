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
        if (serializedState === null) {
            return defval;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defval;
    }
};