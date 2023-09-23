// https://stackoverflow.com/a/15106541
export default function randomPropertyName (object) {
    const keys = Object.keys(object);
    return object[keys[ keys.length * Math.random() << 0]];
};
