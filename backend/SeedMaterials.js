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
      notes: "https://drive.google.com/drive/u/3/folders/11AUdoaQZPemMjGj31q2YfFzM5xvbWDYV",
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
    subject: "Fundamentals of Electrical Sciences",
    resources: {
      books: "https://drive.google.com/drive/folders/1ThSG1u64mVeTRxFQOn6I7izvmfJnrxxD?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1GMOnAjkLuCUCZcySrrlUxg5DL2jkBSoz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1uBGofI_Quaa25tP6UOahbY7VzGgs7n0p?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1Bl4lsAoRS6rlCM9FJl2Kh7hD3Y4G1PCL?usp=drive_link"
    }
  },
  {
    subject: "Data Structures and Algorithms", 
    resources: {
      books: "https://drive.google.com/drive/folders/1dxLWcUAhDhuWwg5lKF5SIjN5BX_YwVCy?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1TIRIV8FFurgVvmVJ1wi2JicfNXfXvqGV?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1XfnJVw6aKvHQHaRqdi6_p1XOGwhpw_tM?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1iKK8AR4Vq1Enh2CmxMP5rk_IlMFXZF2s?usp=drive_link"
    }
  },
  {
    subject: "Object Oriented Programming", 
    resources: {
      books: "https://drive.google.com/drive/folders/1YS-fHxn_vE_HQwHEJyFA0PV3ocdsMDGn?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1mhFmUEoNT8kyiDYHhaj9i0jQqXBUHC8Z?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1hcPRqrHzI5m_tk4342XJ2RcVAZwERn1n?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1o_jod4UZFoMlxrIMgCnHKGkaY6H1s2em?usp=drive_link"
    }
  },
  {
    subject: "Signals and Systems", 
    resources: {
      books: "https://drive.google.com/drive/folders/11LGtfLWAUrbp3cMuoaO2-sX2lofmQpO-?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1wH7e6WrU-hA4rySovgyPqKdk5J6k7vfv?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1718dM6Oe4Nq0xQNlqm5PeK4zDz6MlGx2?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1UxxzvaiIoALalsQLPfPShsWaJmkkkPOe?usp=drive_link"
    }
  },
  {
    subject: "Introduction to Data Science", 
    resources: {
      books: "https://drive.google.com/drive/folders/1Zv2oWDz85_pOaqPOWPiB-eeSF30jUStS?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1I5pibaTfJ--tamvUuecVRHrixC2qtAv2?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1dxPJ9kq4w6NiL4eSE7V8zalhHiclKydz?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1T2fiWLNNP0ZkWSu54WyjcmvVLNywhOw9?usp=drive_link"
    }
  },
  {
    subject: "Workshop Practice", 
    resources: {
      books: "https://drive.google.com/drive/folders/1-MHQ3jeyWxpmDLqgcy_LqMfav8LfOlvD?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1cYj0H23zvnIZBjSAYKicqaV5vMj8f5zr?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1xcVYMprbN4EyEB1GA1nYcXkPmK-ZZc_k?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/152hO6_VG-WcLn_ObLq4amKZkyKh5SsyB?usp=drive_link"
    }
  },
  {
    subject: "Discrete Structures", 
    resources: {
      books: "https://drive.google.com/drive/folders/1AyQYtysKYtR5MRrRdbCxJYAYCqWn_Lqf?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1LYjC1FCQ_9JPe20JC6x2h0diVgBIHBmT?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Hu4tfD9jK9xq1nNxx3Bp5mHWdzMUlN9p?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1ywXDULNlovl5bpo6CIUo25lhIslHQJlt?usp=drive_link"
    }
  },
  {
    subject: "Software Engineering", 
    resources: {
      books: "https://drive.google.com/drive/folders/1qvSe4y7ywSJv3o36qWYeNVZO07fAyD6e?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1deWEwAMVB5LocZHFCPwhT20eUarWqWB4?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1eH0QnUAtOGdZd-FaKJGTPDF0d79LEWCB?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1Ij4lfvlJO6EN5uJ7qzDP2965rlbGyo_x?usp=drive_link"
    }
  },
  {
    subject: "Design and Analysis of Algorithms", 
    resources: {
      books: "https://drive.google.com/drive/folders/1cfyYS-NEzRDj4f0IRKr8DFxHXDuzABzg?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/140c3SeKjePSKm-UmM2b2DawS0fDrDDZa?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/18sjpf947NE3rzKW5eCRQ1Ms4SinGVFr6?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1-mIFWnetJLKL0HwEPc5W_mAFiZn2DTCr?usp=drive_link"
    }
  },
  {
    subject: "Operation Management", 
    resources: {
      books: "https://drive.google.com/drive/folders/14qGlpPta9s2hQG7MCjtrlfcgzAsfguw4?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1-iyRnQZJ__FEMYNqiBHXP_wbeiZRqHir?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1tfS1vfK7QwyCECRsFKh-buMihu5Lr2nl?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1AUQa2Q672w1sNbX1g0CEKXh4BO4YwaiT?usp=drive_link"
    }
  },
  {
    subject: "Introduction to IOT", 
    resources: {
      books: "https://drive.google.com/drive/folders/1QPz8Pes3KdMuU_ggresCXO-hpV8gdlq7?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1oPKJM51wbe2oEf23cngtd--wLGZdiq7u?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1WKssg2jZCjbtJfSRNSB-ctD9zQVjZHaV?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1p5bTHDnnGiVfxQWL1mlHS0bSnIfkOJWk?usp=drive_link"
    }
  },
  {
    subject: "Data Base Management Systems", 
    resources: {
      books: "https://drive.google.com/drive/folders/19PjZ3pyPkPj_48G8BLE9PHhj2WIZoHxV?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Wrr_PeiyAm05QIZKNZXHDvunG8NwnkF8?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1tsWhfsJ0ONR1Gpv1ePBkJ4WBOEeqJNLr?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1FyZBXixlpExGSv4yh7e_dtdz7gmMmyUm?usp=drive_link"
    }
  },
  {
    subject: "Artificial Intelligence", 
    resources: {
      books: "https://drive.google.com/drive/folders/1TFwRrKaUR239XvquRJGPmB3t7hctexED?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1etupALv1ZvwI8PuTFe-Cw3ND0Khxysd0?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1nIt3_dJWj_bKdGCFVYRswq25_dw9Ba5l?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1d0vemFepV1AL_imYTNv8Q61wJ-OqhGbw?usp=drive_link"
    }
  },
  {
    subject: "Ergonomic design", 
    resources: {
      books: "https://drive.google.com/drive/folders/11hNWcEfX5OBtOzdaOFEAbm2do3IovwL2?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1fvBCxxSvGq--x2zeORwYxi0pHj1cu83G?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1zbGppxiYXQNbzqKbeDp87STMySm57JoC?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1h-X39jiqtWQAV86HMI5ef2vmtw4Q0DxG?usp=drive_link"
    }
  },
  {
    subject: "Numerical Techniques for Engineers", 
    resources: {
      books: "https://drive.google.com/drive/folders/1hOEcPfIwKUF7j63gfgl-WbYHHcesx2s7?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/12rvurq9oyfphOORcfLOIg3AZ6vQzZkRz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/19RcSMerFLuCKysjmHblULoZDuuzdzJzY?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1rmG2BocNVlQX5Ty6UEYYIM_65UY_wsq7?usp=drive_link"
    }
  },
  {
    subject: "Digital System Design", 
    resources: {
      books: "https://drive.google.com/drive/folders/1dZk9B35c8c2WZeh1dkmbhwXxOKd3M68b?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1-tUjywjfocDWeaG28so2nMxUg6F-VlzQ?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1VsCQ6Phe6j5Gj6y7hO1GKC4lcdmt7VfL?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1NZkFEQrPARIolwzlAfkJN753yaQz1KCY?usp=drive_link"
    }
  },
  {
    subject: "Analog Communication Systems", 
    resources: {
      books: "https://drive.google.com/drive/folders/1MUQSig-as2_mtc4Puw1wBIPaxODM60cB?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1y9pgJYHlyful4kcTdr2VIq4b-PkyAF9o?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1P_EZm9sZjKYbs2ox9RMmgfrkO6MLfI1u?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1XBXIbd8lVNATj0PM83NuMXNJc-WBo3Xw?usp=drive_link"
    }
  },
  {
    subject: "Electronics Circuit Simulation Workshop", 
    resources: {
      books: "https://drive.google.com/drive/folders/16__RD60Yw2mthCleASCnyHZ8tESfmEPv?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1IqnWIy3WyjX2XJLFdQ4lPk-dFtrDct9t?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1qkKZBtWED9xoKtNZpo_IJYa6XbcEPGik?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1XJ59QU-Pniz29QEnWJvd7ocu4bG6oT2w?usp=drive_link"
    }
  },
  {
    subject: "Advanced Electronic Workshop", 
    resources: {
      books: "https://drive.google.com/drive/folders/1ykGojzqYnSHcIi3KgWxW-AmsF-sII0Wk?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/17cwK36rp78HovgfTJy4JuTeA7pFk5bLB?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Sly1FGQknvh3QaQaMTwgVsrlHitEQclD?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1wtp7UlLQUSw7DvtLazKb0_SjmmqvK6Zk?usp=drive_link"
    }
  },
  {
    subject: "Analog and Digital Electronics", 
    resources: {
      books: "https://drive.google.com/drive/folders/1Rl0zy9zkiPiAu44AF5y7n_Tlt1wVUPF5?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1N4oRgeHSGORENVnqldROZQ1xigEh6kmf?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1GzrJg3FGze2PsSUlFnMPw8_cdIKdcVY9?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1po6dwdEuBhRYYYda4lAQcSfjtFeuOhBd?usp=drive_link"
    }
  },
  {
    subject: "Open Source Technologies", 
    resources: {
      books: "https://drive.google.com/drive/folders/1LkUJX1wzcCcPT0uqW9RnZwgn9W4F2sGZ?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1FGcb6hv-Ontbj5xW2e9pcXnVyS9fiJSc?usp=drive_linkk",
      pyqs: "https://drive.google.com/drive/folders/1qY-S-f7F-meC7LL5uBDN65WYeLuaUDyz?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1GOgMDp7MJms9qLxgiWJgUk4iWalCbcRU?usp=drive_link"
    }
  },
  {
    subject: "Production Technology 1", 
    resources: {
      books: "https://drive.google.com/drive/folders/1SBDXOz3RFtLJQjH1qZ2_TxS7kOhdaWAU?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1BHzpbnKNUimkwMIwoBenW6sH57yZWY0h?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1YlD86dH28cH7sep6AyTvkZZ9ALrq-O0r?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1vqmTU5IBeZp-P8lRTEDz1ie-UojCE9rO?usp=drive_link"
    }
  },
  {
    subject: "Engineering Materials", 
    resources: {
      books: "https://drive.google.com/drive/folders/1dy2wwHXpkPiKwQXRhIiJFCavNG83ugmE?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Zs5MDwuBX6BkKdSAaSJl35pnSfIYiNHz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1yXt_0jOn8fd3NUPe2MmutsTTb9K5IYWD?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1UcsWUrU3tT_ukPeoB0IYyg_yCgZI7fKE?usp=drive_link"
    }
  },
  {
    subject: "Thermal Engineering 1", 
    resources: {
      books: "https://drive.google.com/drive/folders/1Ojbp1T5zmL46eBTQGQZYH1ND_GIjD9tR?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1XvHejsskYcduro6-cZbB_zJ0A1W7AMal?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1z4PLa3aeDOfyAInVsJ1bmBy2_9Kx-p5a?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1Q4joPAIkDPKMda11rb0bSYvZlLz_yqZ0?usp=drive_link"
    }
  },
  {
    subject: "Machine Drawing Lab", 
    resources: {
      books: "https://drive.google.com/drive/folders/1qs5yzD-OTc1U_8OmfhxVwsdvC36ar0RS?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1OKi4fPlzSm-M-zRQaBXPYI8T-CNJXXnN?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/13QuadQPWSiicg0LIYDGtN38ckAlGDNNB?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1a2DW4TtkLY6QP8tqxvFkd-z7-xVqC6Fr?usp=drive_link"
    }
  },
  {
    subject: "Robotics Lab", 
    resources: {
      books: "https://drive.google.com/drive/folders/1CDl-9wpc19qGeuTrGdxHnrVZ-AMrFEEe?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1rgqq8Mozp97MlBuQXUb1pDoNhxqBTexM?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/13DDpShrX3xp05jxX-0ZSS4BaEu9wqeIX?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1blQNHNzD5-BiQUkoqllFjGyqra0briko?usp=drive_link"
    }
  },
  {
    subject: "Elements of Mechanical Engineering", 
    resources: {
      books: "https://drive.google.com/drive/folders/1wPqycKxCg33J0PCC98KjSnnOt3ievmXb?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1AhuGmsMbG_O2HdUfJM67mAzadXB5vnPo?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Dn2BtFo6g-rwx0yIgiwTmLIYLuLd7Fxt?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1pZDvfDBY5sjVmWUhpY3ay0tSAob9RPic?usp=drive_link"
    }
  },
  {
    subject: "Engineering Mechanics", 
    resources: {
      books: "https://drive.google.com/drive/folders/1wPqycKxCg33J0PCC98KjSnnOt3ievmXb?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1AhuGmsMbG_O2HdUfJM67mAzadXB5vnPo?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Dn2BtFo6g-rwx0yIgiwTmLIYLuLd7Fxt?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1pZDvfDBY5sjVmWUhpY3ay0tSAob9RPic?usp=drive_link"
    }
  },
  {
    subject: "Programming Fundamentals",
    resources: {
      books: "https://drive.google.com/drive/folders/1WrmezivalP4qY-L8No4dBVJA6WGyJV7q?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1U-LnMxrRyngvLOQjyrqg49gobBpKpq6u?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/105tut03VAdB_UxJGknXL6CexSKaTmvDE?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1t-AFZOdeSor4DE4AAkW6CSlsq6HU1iTg?usp=drive_link"
    }
  },
];

const seedDB = async () => {
  await connectDB();
  await Material.deleteMany({});
  await Material.insertMany(seedData);
  console.log("✅ Data Seeded");
  mongoose.connection.close();
};

seedDB();
