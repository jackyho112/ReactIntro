export function matchShowWithSearchTerm (searchTerm, show) {
  return `${show.title} ${show.description}`
    .toUpperCase()
    .indexOf(searchTerm.toUpperCase()) >= 0
}
