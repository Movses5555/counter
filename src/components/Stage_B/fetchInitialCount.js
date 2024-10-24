export const fetchInitialCount = async () => {
  try {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ data: 10 }), 1000)
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
