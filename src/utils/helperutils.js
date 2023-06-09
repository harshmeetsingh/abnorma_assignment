export const getTop5MaliciousWebsites = (data) => {
  let websiteMap = {};
  data.forEach((it) => {
    let domain = it.from.split("@")[1];
    if (!websiteMap[domain]) {
      websiteMap[domain] = 1;
    } else {
      websiteMap[domain]++;
    }
  });
  const sortedMap = Object.keys(websiteMap).sort(
    (a, b) => websiteMap[b] - websiteMap[a]
  );
  const top5 = sortedMap.slice(0, 5).map((it) => {
    return {
      id: it,
      count: websiteMap[it],
      percentage: ((websiteMap[it] * 100) / data.length).toFixed(2),
    };
  });
  return top5;
};
