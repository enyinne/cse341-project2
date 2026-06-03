const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "pending" },
    priority: { type: String, default: "medium" },
    dueDate: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);