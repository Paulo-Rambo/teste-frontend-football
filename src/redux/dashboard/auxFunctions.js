export function getBiggerLineup(lineups) {
  const newLineups = lineups.reduce((bigerObj, obj) => {
    if (bigerObj.player < obj.played) {
      return obj;
    }
    return bigerObj;
  });

  return newLineups;
}
