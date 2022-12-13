/**
 * Utility function to save data to local storage
 * @param key string
 * @param value string
 */
export const saveData = (key: string, value: string) =>{
    localStorage.setItem(key, value);
}

/**
 * Get data based on key
 * @param key string
 * @returns value for the key
 */
export const getData = (key: string) => {
    return localStorage.getItem(key);
}


/**
 * Find the object item case insensitively
 * @param obj the data to be searched
 * @param prop the value
 * @returns 
 */
export const findVal = (obj:any, prop:any) => {
    prop = (prop + "").toLowerCase();
    for (var p in obj) {
        if (obj.hasOwnProperty(p) && prop ===
            (p + "").toLowerCase()) {
            return obj[p];
        }
    }
    return null;
}