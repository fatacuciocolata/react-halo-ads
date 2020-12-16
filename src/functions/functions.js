export const trimString = (str) => {
  if (!str) {
    return "http://localhost:8000/assets/img/no-image.png";
  }
  var url = "http://localhost:8000/storage/images/";
  var index = str.indexOf("images/");
  var newString = url + str.slice(index + 7);
  return newString;
};
