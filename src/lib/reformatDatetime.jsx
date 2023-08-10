export default function reformatDatetime(datetimeString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateObject = new Date(datetimeString);
  return dateObject.toLocaleDateString(undefined, options);
}
