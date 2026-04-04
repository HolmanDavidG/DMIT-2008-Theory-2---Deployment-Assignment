import profile from '../../data/profile.json';

export default function handler(req, res) {
    try {
        res.status(200).json(profile.about);
    } catch (err) {
        res.status(500).json({ error: "Failed to load data" });
    }
}