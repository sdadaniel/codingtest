function solution(players, callings) {
  const bb = {};
  const aa = {};
  players.map((p, i) => {
    bb[p] = i;
    aa[i] = p;
  });

  callings.map((name) => {
    const calledIndex = bb[name];
    const l = aa[calledIndex - 1];
    bb[name] = calledIndex - 1;
    bb[l] = calledIndex;
    aa[calledIndex] = l;
    aa[calledIndex - 1] = name;
  });

  return Object.values(aa);
  return players;
}
