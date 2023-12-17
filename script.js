document.addEventListener('DOMContentLoaded', function () {
  // Ustaw klucz API (zastąp 'YOUR_API_KEY' własnym kluczem)
  const apiKey = 'AIzaSyDTaR-HhUd-lJmt_IrOkZkR-DfD2CPDP5E';

  // Ustaw identyfikator kanału (zastąp 'CHANNEL_ID' własnym ID kanału)
  const channelId = 'CHANNEL_ID';

  // Funkcja pobierająca liczbę subskrypcji z YouTube API
  function fetchSubscribersCount() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
    
    axios.get(apiUrl)
      .then(response => {
        const subscriberCount = response.data.items[0].statistics.subscriberCount;
        updateSubscribersCount(subscriberCount);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      });
  }

  // Funkcja aktualizująca licznik subskrypcji na stronie
  function updateSubscribersCount(count) {
    const subscribersElement = document.getElementById('subscribers-count');
    if (subscribersElement) {
      subscribersElement.textContent = `Liczba subskrybentów: ${count}`;
    }
  }

  // Początkowe pobranie i ustawienie liczby subskrypcji
  fetchSubscribersCount();

  // Aktualizacja co 60 sekund (60000 milisekund)
  setInterval(fetchSubscribersCount, 60000);
});
