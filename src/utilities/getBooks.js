const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    const arrayBooks = data.library;
    console.log(data.library, "data");

    return arrayBooks;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  }
};

export default fetchData;
