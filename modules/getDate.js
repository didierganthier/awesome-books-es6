const setDateToHTML = (element, datetime) => {
  const date = datetime.now();
  element.innerHTML = date.toLocaleString(datetime.DATE_MED);
};

export default setDateToHTML;
