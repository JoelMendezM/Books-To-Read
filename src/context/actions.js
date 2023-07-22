export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const data = await response.json();
    const arrayBooks = data.library;
    return arrayBooks;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
