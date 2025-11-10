(function(){
  const seededRandom = function(seed) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function() {
      return (s = (s * a) % m) / m;
    };
  };

  function fetchAPI(date) {
    try {
      const d = date instanceof Date ? date : new Date(date);
      const result = [];
      const random = seededRandom(d.getDate());
      for (let i = 12; i <= 22; i++) {
        if (random() < 0.5) result.push(`${String(i).padStart(2, '0')}:00`);
        if (random() < 0.5) result.push(`${String(i).padStart(2, '0')}:30`);
      }
      return result;
    } catch (e) {
      return ["17:00", "18:00", "19:00", "20:00"]; // fallback
    }
  }

  function submitAPI(formData) {
    return true;
  }

  if (!window.API) {
    window.API = {};
  }
  window.API.fetchAPI = fetchAPI;
  window.API.submitAPI = submitAPI;
})();
