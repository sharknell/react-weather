const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          resolve({ latitude: 37.738123, longitude: 127.044425 });
        }
      );
    } else {
      resolve({ latitude: 37.738123, longitude: 127.044425 });
    }
  });
};

export default getCurrentLocation;
