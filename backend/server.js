const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const headlines = [
  "Why [NAME] is [LOCATION]'s Sweetest Spot in 2025",
  "Top Reasons to Choose [NAME] in [LOCATION]",
  "[NAME]: Redefining Local Excellence in [LOCATION]",
  "Discover the Magic of [NAME] in [LOCATION]",
  "What Makes [NAME] a Must-Visit in [LOCATION]"
]

const generateHeadline = (name, location) => {
  const template = headlines[Math.floor(Math.random() * headlines.length)]
  return template.replace('[NAME]', name).replace('[LOCATION]', location)
}

app.post('/business-data', (req, res) => {
  const { name, location } = req.body
  res.json({
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 10),
    headline: generateHeadline(name, location)
  })
})

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query
  res.json({ headline: generateHeadline(name, location) })
})

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`))
