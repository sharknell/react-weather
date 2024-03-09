const KakaoMap = {
  renderMap: (container, latitude, longitude) => {
    return new Promise((resolve, reject) => {
      const kakao = window.kakao;
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      resolve();
    });
  },
};

export default KakaoMap;