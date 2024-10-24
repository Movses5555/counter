const fetchInitialCountersAPI = async () => {
  const response = await Promise.resolve({
    data: [{ id: Date.now(), value: Math.floor(Math.random() * 100) }]
  });
  return response.data;
};

export default fetchInitialCountersAPI;