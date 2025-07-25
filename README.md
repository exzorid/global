### SEND REACTION
```js
     await exzor.sendMessage(
            m.chat,
            {
                react: {
                    text: '💖', // use an empty string to remove the reaction
                    key: m.key
                }
            }
        )
```

### SEND IMG + BUTTON CHANNEL
```js
    await exzor.sendImageMentioned(
            m.chat,
            'https://cdn.dribbble.com/userupload/13167768/file/original-08e29755d8f12fdb9ef53d5b88bfeef0.jpg',
            'Ini gambar dengan mention, forward info, dan quoted',
            m
        );
```

### SEND BUTTON
```js
    await exzor.sendButton(
            m.chat,
            'Pilih salah satu ya 👇',
            '📍 Bot Exzor',
            [
                { id: '.menu', text: '📜 Menu' },
                { id: '.owner', text: '👤 Owner' },
                { id: '.donate', text: '💰 Donasi' }
            ],
            m
        );
```

### SEND MENU FLOW
```js
        await exzor.sendMenuFlow(
            m.chat,
            "Silakan pilih menu dari list di bawah ini 👇",
            "https://cdn.dribbble.com/userupload/13167768/file/original-08e29755d8f12fdb9ef53d5b88bfeef0.jpg",
            m,
            [
                { title: "🎮 Game", id: ".example" },
                { title: "📥 Download", id: ".download" }
            ],
            {
                title: "Menu Bot Premium",
                footer: "🧠 Powered by Exzor",
                highlightLabel: "✨ Terbaru",
                thumbnailUrl: "https://telegra.ph/file/1234567890abcdef.jpg",
                externalTitle: "Exzor Botz",
                externalBody: "Multifungsi & Powerful",
                sourceUrl: "https://youtube.com/@exzorid"
            }
        );
```

### SEND IMG KECIL + BUTTON CHANNEL
```js
 await exzor.sendimgch(m.chat, 'Klik tombol di bawah untuk melihat chanl', 'https://i.pinimg.com/originals/82/7f/68/827f6895af3187c2f2609e9a3a39f845.jpg', m);
```
