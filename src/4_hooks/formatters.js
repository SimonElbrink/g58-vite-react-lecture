// Formatting helpers (SEK + Swedish locale)
export const fmtCurrency = (n) => {
    // Number is a built-in JavaScript function that converts a value to a number.
    // Convert input to a number, if it's not already a number.
    // toLocaleString is a method that formats a number as a string using locale-specific conventions.
    // "sv-SE" is the locale code for Swedish, and "SEK" is the currency code for Swedish Krona.
    // "en-US" is the locale code for English (United States), and "USD" is the currency code for US Dollar.
    // how to know all locale codes and currency codes?


    //return Number(n).toLocaleString("sv-SE", { style: "currency", currency: "SEK" });
    return Number(n).toLocaleString(undefined, { style: "currency", currency: "SEK" });
    //return Number(n).toLocaleString('en-US', { style: "currency", currency: "USD" });
    // Using `undefined` is a common and recommended practice when you want to respect the user's locale settings.
}

export const fmtDur = (mins) => {
    // const h = mins / 60;
    // Math is a built-in JavaScript object that provides mathematical constants and functions.
    // floor is a method that rounds a number down to the nearest integer.
    const h = Math.floor(mins / 60); // Use Math.floor to get the whole hours, it avoids decimal values
    const m = mins % 60; // Use the modulus operator to get the remaining minutes after dividing by 60
    return `${h}h ${m}m`; // Template literals (``) are used to create a string that includes the values of h and m
};

export const fmtTime = (iso) => {
    // iso is a string representing a date in ISO 8601 format (e.g., "2023-10-01T12:00:00Z").
    const d = new Date(iso); // Create a new Date object from the ISO string
    // toLocaleTimeString is a method that formats the time portion of a date as a string using locale-specific conventions.
    return d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

    // return d.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    // Shows time in 12-hour format like "11:30 AM"
    // return d.toLocaleTimeString('sv-SE', { hour: "2-digit", minute: "2-digit" });
    // Shows time in 24-hour format like "11:30"
};

export const fmtDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};
