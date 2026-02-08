import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({
  region: process.env.AWS_SES_REGION || 'eu-west-1',
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_KEY,
  },
})

export default async function handler(req, res) {
  /* ── CORS ── */
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  /* ── Only POST ── */
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'İsim, e-posta ve mesaj zorunludur.' })
  }

  const subjectMap = {
    kurumsal: 'Kurumsal Danışmanlık',
    bireysel: 'Bireysel Danışmanlık',
    liderlik: 'Liderlik Gelişimi',
    upcore: 'UpCore Hizmetleri',
    diger: 'Diğer',
  }

  const readableSubject = subjectMap[subject] || subject || 'Genel'

  const params = {
    Source: 'Asena Türkay Web <info@asenaturkay.com>',
    Destination: {
      ToAddresses: ['info@asenaturkay.com'],
    },
    Message: {
      Subject: {
        Data: `İletişim Formu: ${readableSubject} — ${name}`,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
              <div style="border-bottom: 1px solid #eae6df; padding-bottom: 20px; margin-bottom: 24px;">
                <h2 style="font-size: 20px; font-weight: 400; margin: 0;">Yeni İletişim Formu Mesajı</h2>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 10px 0; color: #8a8a8a; width: 110px; vertical-align: top;">İsim</td>
                  <td style="padding: 10px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #8a8a8a; vertical-align: top;">E-posta</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #9a8c7a;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #8a8a8a; vertical-align: top;">Konu</td>
                  <td style="padding: 10px 0;">${readableSubject}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #8a8a8a; vertical-align: top;">Mesaj</td>
                  <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>
              <div style="border-top: 1px solid #eae6df; margin-top: 24px; padding-top: 16px; font-size: 12px; color: #bbb;">
                Bu mesaj asenaturkay.com iletişim formu üzerinden gönderilmiştir.
              </div>
            </div>
          `,
          Charset: 'UTF-8',
        },
        Text: {
          Data: `İsim: ${name}\nE-posta: ${email}\nKonu: ${readableSubject}\n\nMesaj:\n${message}`,
          Charset: 'UTF-8',
        },
      },
    },
    ReplyToAddresses: [email],
  }

  try {
    await ses.send(new SendEmailCommand(params))
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('SES Error:', error)
    return res.status(500).json({ error: 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.' })
  }
}
