import profile from '../../data/profile.json';

export default function handler(req, res) {
    try {
        if (!profile.about) {
      return res.status(404).json({ error: "About section not found in profile.json" });
    }
    res.status(200).json(profile.about);
  } catch (error) {
  
  res.status(200).json(profile.about);
}