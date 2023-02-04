export const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&auto&q=${quality || 75}`
}