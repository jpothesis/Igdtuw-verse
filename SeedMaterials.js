require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Material = require("./models/Material");


const seedData = [
  {
    subject: "Applied Mathematics",
    resources: {
      books: "https://drive.google.com/drive/folders/1-Y_nQjkGQlMn_zB2WRSJpIifRQAbkSF_?usp=sharing",
      notes: "https://drive.google.com/drive/folders/1_rNT7J5dXP4Es2NChZPwh0SV9DHNEQty?usp=sharing",
      pyqs: "https://drive.google.com/drive/folders/1_rNT7J5dXP4Es2NChZPwh0SV9DHNEQty?usp=sharing",
      assignments: "https://drive.google.com/drive/folders/1WREpYdYLJVoygOTTH3JBczozsCbAdw08?usp=sharing"
    }
  },
  {
    subject: "Applied Physics",
    resources: {
      books: "https://drive.google.com/drive/folders/1I9oEIAt4qv7In7TqNrJLSNHnvk2vvmD_?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1_nj-J7-itCy_xpIsN9NgIBBduh6CWXUf?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1q-KlYAYYUaO-4LK6hvb0QbGVrjlJEVgW?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1DoXJE_OJmZWHl4mNzg3pW2qDPdYgN4li?usp=drive_link"
    }
  },
  {
    subject: "Programming with C",
    resources: {
      books: "https://drive.google.com/drive/folders/1c5pcFgaLbb0nvwQqIQhAJTqZ7Gt7zRJK?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Zk4M_0eSXPFbMXSOeeuPXKq18SKi1447?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1YKlqfWsrQjwVOGJetcXyGp8Bp_8Z0xzu?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1_THMJ3Z7J85fh9tAF1dh1GImcy9Tgqz_?usp=sharing"
    }
  },
  {
    subject: "Web Application Development",
    resources: {
      books: "https://drive.google.com/drive/folders/1uonSKEznRKON8fpisMdR74UBuWVKlfoK?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1qjCODTh1cS8he3RO_g0_gZqDkCK6vfZf?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Czz4hdlHSJl8mQZYWmVt0nhjOHo4cvUS?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1U_I8IOkG9OPdjG4tkLLm38cWxgEQGKi-?usp=drive_link"
    }
  },
  {
    subject: "Basics of Electrical and Electronics Engineering",
    resources: {
      books: "https://drive.google.com/drive/folders/1D38KIgcE_B0EWXrDdFzYvl8QVWo0wo-e?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1OrSg1tlCTrDa9wpCZSEj6OUnBThEZRjE?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1ctnWqi5B-bBfutwQFC86pqdvy4ynBuPn?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1sg19WTiAKCDOP9TBeN7AOQLlsCL_DFjq?usp=drive_link"
    }
  },
  {
    subject: "Communication Skills",
    resources: {
      books: "https://drive.google.com/drive/folders/1b9QM9uNg2D25eewEAwiOoInmqrsO-Mf5?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1OrSg1tlCTrDa9wpCZSEj6OUnBThEZRjE?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1LHxHoVmnwRHrlrE92_Y7H2TxfaJRVA9m?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1R7vzVOjXf0Lpq4Km2pDT-m2kz4Vr6XDA?usp=drive_link"
    }
  },
  {
    subject: "Environmental Science",
    resources: {
      books: "https://drive.google.com/drive/folders/17fRHqbmouB7W1WZSoCqJRgQoaGolFSN2?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1wpQ3E-gOyLEhO1Jr-sgMjA2G_SjlTPG0?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1qcySWyT8hxqd6srE_GadgvLjfu3rm6si?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1QlizrFhw1Bsl0yAGX1QvSmaM9ZktCRRW?usp=drive_link"
    }
  },
  {
    subject: "IT Workshop",
    resources: {
      books: "https://drive.google.com/drive/folders/1WB2WPrXAcP4cF_U1WYdTmmZ2jLYSZy8e?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/16OVaFKnhyRh1y20H5K2Zxiv0BNOyFfYh?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1LdRUEB7l_3J14P2HyLP2amqjZ4oc0snt?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1KH_i_EBQCXAVcaZ0wwzMyjiBTGrIm6FS?usp=drive_link"
    }
  },
  {
    subject: "Probability and Statistics",
    resources: {
      books: "https://drive.google.com/drive/folders/1eGdOM1yUwP5XxA9nYVqiAFlpEmQJh_6r?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/160JWvPE1YPzkPRe7aC5g0mNUdTBLLccP?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1mpPFSyWvFLPIo4Kw629ealnu8imIK2YD?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1fUK_rHg8omUBwEupKXK6fA9jmyuYst3O?usp=drive_link"
    }
  },
  {
    subject: "Programming with Python",
    resources: {
      books: "https://drive.google.com/drive/folders/1WrmezivalP4qY-L8No4dBVJA6WGyJV7q?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1U-LnMxrRyngvLOQjyrqg49gobBpKpq6u?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/105tut03VAdB_UxJGknXL6CexSKaTmvDE?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1t-AFZOdeSor4DE4AAkW6CSlsq6HU1iTg?usp=drive_link"
    }
  },
  {
    subject: "Analog Electronics",
    resources: {
      books: "https://drive.google.com/drive/folders/19cPYBFX7qCuwLodWIbg1CxJ8f6tM6lkN?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1CBZaCOlswy2h_YErYmZrp880UcOZY306?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1hEfCk-lur8mUArOJIIbYNZfcH1KvCr1H?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1LFcmCVkFGKJaC5idZuzN5ZL_YCunqqNR?usp=drive_link"
    }
  },
  {
    subject: "Intelligent Systems",
    resources: {
      books: "https://drive.google.com/drive/folders/19cPYBFX7qCuwLodWIbg1CxJ8f6tM6lkN?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1CBZaCOlswy2h_YErYmZrp880UcOZY306?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1hEfCk-lur8mUArOJIIbYNZfcH1KvCr1H?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1LFcmCVkFGKJaC5idZuzN5ZL_YCunqqNR?usp=drive_link"
    }
  }
];

const seedDB = async () => {
  await connectDB();
  await Material.deleteMany({});
  await Material.insertMany(seedData);
  console.log("✅ Data Seeded");
  mongoose.connection.close();
};

seedDB();
