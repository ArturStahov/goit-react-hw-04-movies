const InfinityScroll = (trecingID, fetch) => {
  const onEntries = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetch();
      }
    });
  };
  const options = {
    rootMargin: '200px',
    threshold: 0.5,
  };
  const observerApi = new IntersectionObserver(onEntries, options);
  const trackingObj = document.querySelector(trecingID);
  observerApi.observe(trackingObj);
};

export default InfinityScroll;
