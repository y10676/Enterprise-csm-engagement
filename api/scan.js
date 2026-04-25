export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const FOLDER_ID = '1dprtL0BC19gJXh83EZtqlQ2eC9PmlQ6n';
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ reports: [], configured: false });
  }

  try {
    const q = encodeURIComponent(
      `'${FOLDER_ID}' in parents and name contains 'enterprise-csm-engagement-' and trashed=false`
    );
    const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name)&orderBy=name+desc&key=${apiKey}`;
    const r = await fetch(url);
    if (!r.ok) {
      return res.status(200).json({ reports: [], configured: true, error: 'Drive API error' });
    }
    const data = await r.json();
    const reports = (data.files || [])
      .filter(f => /^enterprise-csm-engagement-\d{4}-\d{2}-\d{2}\.html$/.test(f.name))
      .map(f => ({
        date: f.name.replace('enterprise-csm-engagement-', '').replace('.html', ''),
        fileId: f.id,
        viewUrl: `https://drive.google.com/file/d/${f.id}/view`,
        embedUrl: `https://drive.google.com/file/d/${f.id}/preview`,
      }));
    return res.status(200).json({ reports, configured: true });
  } catch (e) {
    return res.status(200).json({ reports: [], configured: true, error: e.message });
  }
}
