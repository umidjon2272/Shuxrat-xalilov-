require('dotenv').config();
console.log('TOKEN:', process.env.BOT_TOKEN);



require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/lead', async (req, res) => {
  try {
    const { name, phone, service } = req.body;

    const text = `
🔥 Yangi Lead

👤 Ism: ${name}
📞 Telefon: ${phone}
🛠 Xizmat: ${service || 'Tanlanmagan'}
`;

    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server ${process.env.PORT} portda ishladi`);
});
