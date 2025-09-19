function filterName(name) {
  if (!name) {
    return "unknown";
  }
  if (name.includes(" ")) {
    return name.trim();
  }
  if (name.length > 10) {
    return name.slice(0, 10);
  }
  if (name.startsWith("_")) {
    return name.slice(1);
  }
  // uncoverage
  if(name === "Hell"){
    throw Error("This Name is not allowed");
  }
  return name;
}

module.exports = filterName;
