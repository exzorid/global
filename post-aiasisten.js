const url = 'https://myapi.exzorid.my.id/api/aiservice';
const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    apikey: "APIKEY_USER",
    tokenai: "APIKEY_AI",
    pertanyaan: "Nama kamu siapa?",
    urlfile: "https://example.com/file.txt"
  })
})
const result = await res.json()
console.log(result)
