// Sorting functions.

// higher-order function (takes group, returns sort function)
// sorts a move list by level, then by name, with all 0-level moves displayed at the end of the list
export const sortMovesByGroup = currentGroup => (a, b) => {
  // if moves are both in current group, we can sort by level
  if (currentGroup in a.versionGroups && currentGroup in b.versionGroups) {
    const lvlA = a.versionGroups[currentGroup].level
    const lvlB = b.versionGroups[currentGroup].level
    // if both are 0, then alphabetize
    if (lvlA === 0 && lvlB === 0) {
      return alphabeticalSortByName(a, b)
    }
    // if one is 0, push it to the bottom of the list
    if (lvlA === 0) { return 1 }
    if (lvlB === 0) { return -1 }
    // if the levels are equal, sort alphabetically
    if (lvlA === lvlB) {
      return alphabeticalSortByName(a, b)
    }
    // otherwise, we can actually sort by level
    return lvlA > lvlB ? 1 : -1
  } else {
    // push all entries outside of the current group to the bottom of the list
    if (!(currentGroup in a.versionGroups)) {
      return -1
    }
    if (!(currentGroup in b.versionGroups)) {
      return 1
    }
  }
}


export const alphabeticalSortByName = (a, b) => {
  return a.name > b.name ? 1 : -1
}

