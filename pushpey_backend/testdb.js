import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

dotenv.config();

// Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

// Connect and insert
async function testMongoConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB using Mongoose");

    const existing = await User.findOne({ email: "admin@example.com" });

    if (!existing) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await User.create({
        email: "admin@example.com",
        password: hashedPassword
      });
      console.log("✅ Admin user created: admin@example.com | admin123");
    } else {
      console.log("⚠️ Admin user already exists.");
    }
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.disconnect();
  }
}

testMongoConnection();
