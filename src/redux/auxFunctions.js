export function getBiggerLineup(lineups) {
  if (lineups.length === 0) {
    return;
  }
  const newLineups = lineups.reduce((bigerObj, obj) => {
    if (bigerObj.player < obj.played) {
      return obj;
    }
    return bigerObj;
  });

  return newLineups;
}
