export function generateId(text) {
    const words = text.trim().split(/\s+/);
    // Take the first 4 words
    const first4Words = words.slice(0, 4);

    // Join the words with hyphens, convert to lowercase, and return as an ID
    const id = first4Words.join("-").toLowerCase();

    return id;
}
