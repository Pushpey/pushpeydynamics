import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("🔹 Received contact form data:", req.body); // Log 1

  try {
    const contact = new Contact({ name, email, message });

    console.log("🔸 Contact object to be saved:", contact); // Log 2

    await contact.save();

    res.status(201).json({ message: 'Contact submitted!' });
  } catch (err) {
    console.error("❌ Error while saving contact:", err); // Error log
    res.status(500).json({ message: 'Error saving contact' });
  }
};
