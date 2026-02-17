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
      pyqs: "https://drive.google.com/drive/folders/1CA_zxhP3O0F8T9PXToOsBaa73A-0YjFL?usp=drive_link",
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
    subject: "Analog Communication System", 
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
  {
    subject: "Electronics Workshop", 
    resources: {
      books: "https://drive.google.com/drive/folders/1kGF9avbUDcGOkmTDso8IjywRkZtV0MQz?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/17UhhgQmQ12v7TbQC0yfUTwI8_6zJvCCQ?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/17r3YPq2UPD14nTwomsa9RiAmmTobG6Jy?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/16ANb8svTlsOGdFi2DxNdxQ87omgcHPPZ?usp=drive_link"
    }
  },
  {
    subject: "Calculus 1", 
    resources: {
      books: "https://drive.google.com/drive/folders/1g4zlJ1h6M7QTO91Q_wK_7F9C-1x_QwZm?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1_PUL_CF0NLt2gyY7bs7frvUIIpS9rU4i?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1c4FWoGs5Ma0wTFnkiejjAZZ5LOIfUbqX?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1VUqLpsl60OpVBBNC0RpPbh9YoXYD681i?usp=drive_link"
    }
  },
  {
    subject: "Advanced IOT", 
    resources: {
      books: "https://drive.google.com/drive/folders/1SbJqMC4rtZYfn_8HVbGv_o-w8ABByqNM?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1yAJIRKyykvdwLqsZ0B6aA2XYqWHbHous?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1wFY88XC-cJfD1xSJan5YaWjsx88qI5iI?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1OFsI8ndzFtltpOH3FIaUA4pvvE6IrCoC?usp=drive_link"
    }
  },
  {
    subject: "COA", 
    resources: {
      books: "https://drive.google.com/drive/folders/1r4r1B7gs2Yn6ZiIY8rRa0sQFwg7KlFig?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1bjaWz7zgAFTwzPS9i5k1FMzEpjEoA1Nd?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1d3ovN73xxF5OVgmjgc26Lca69odFPPEo?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1DbCdx8g_WJ86ZO-RsOB5d7TkpxVMW-8k?usp=drive_link"
    }
  },
  {
    subject: "DCCN", 
    resources: {
      books: "https://drive.google.com/drive/folders/1jac1olOXaK7Mop9JZ40UcA3CRKIr01wA?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1D9gyDKSKEMQiT1TYeyVrZaRvtQjRQIeF?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1DMjsoipt-Fuq7gYnVhIyOu-jT36GA9Fe?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1u3aQkf5jxRwFDm0A935UKMmfkjFPhCU-?usp=drive_link"
    }
  },
  {
    subject: "Operating Systems", 
    resources: {
      books: "https://drive.google.com/drive/folders/1HHiy-ov8cBT9xmTO1lUrUwb6qgDk4mpd?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1HycwVW-9rzzA0o4hha7jmrwJH_bYH45j?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1GRjYoZTvGUDAewtiBcWotZfUEHDm8muy?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1pu7gdlVlJZS0nLf0nv9G65SIGN734l-A?usp=drive_link"
    }
  },
  {
    subject: "Data Mining", 
    resources: {
      books: "https://drive.google.com/drive/folders/14D8AWAaLr_TuaBsn5G3puf6iK2hy9YvK?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1OdFbKVUjvjHlU-aCvSEwCIY3nQs0NMWb?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Z02syFaHr6www84UGPK5zUP8YlmJmPo6?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1ns-LAsejuLd8ERczWtRUSmSKc9_3KPta?usp=drive_link"
    }
  },
  {
    subject: "UHV", 
    resources: {
      books: "https://drive.google.com/drive/folders/1afS_8Odqh_lqCWumxniTxMuXt8G3iCyY?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1FvREGo4zonjwklXEGJsDMC6fvVr6ZeoU?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1QGeS0tnlpjolnLrS_d9nx0r7SJpqn-Fs?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1W-U02moAHyJHJ2nnUb3pUYnXWPugoYiQ?usp=drive_link"
    }
  },
  {
    subject: "Cloud Computing", 
    resources: {
      books: "https://drive.google.com/drive/folders/1Tku3skrE7fm0SVqJ1CMu2xStye2a62Xr?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1pm2kdjfCpDi8bY-X-Y10fD4QX0F5z2Vp?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1WRyGVQzUDy-5EiCUooBAa0F3VNPLhtJ5?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1e8TqEOcLoC2uh7AdjzIagO2I5eybGiwC?usp=drive_link"
    }
  },
  {
    subject: "Computer Networks (CN)", 
    resources: {
      books: "https://drive.google.com/drive/folders/1dbcnqV2lQCXCzU1RoOmnb5P4rehCNWuL?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1AifA4kroKF9bX8PBi6Uptfp6gWZEAbuz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1wuFvflV8znWTRyrzRzsaLlWBVnAqlyec?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1POqK2FGT1I-WjjriRN8cMBkI7c1wMsD6?usp=drive_link"
    }
  },
  {
    subject: "Optimization Techniques & decision Making", 
    resources: {
      books: "https://drive.google.com/drive/folders/1c1Rmd9rC_6HrTKSs7zst3SiMoTft6GdW?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/18zhlezdp1JCwUS5rWDGIk0qwxsgYESo9?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Rz902uGyJMTfi8kmS65awdsyHg2wAMwy?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1E3vxFNU4eB3yNJcXDYw_XU8AqnLSDVZU?usp=drive_link"
    }
  },
  {
    subject: "Analog Electronics", 
    resources: {
      books: "https://drive.google.com/drive/folders/16Cn06i3NA3Q_W6DfnzAdxsk8tBEGxaXc?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Dur4YE9wtl-FFCBsMY7tYq2d6eMQRoLL?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Ubpvaal_glSAiXbbLdic1Drcns-xZZ4L?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1LjXeKS0aafsUhLxxb2S5fEPoZzeDZoNl?usp=drive_link"
    }
  },
  {
    subject: "Digital Communication System", 
    resources: {
      books: "https://drive.google.com/drive/folders/1mt9o5BTsblI0LRYTHarc4LngXRKYp68P?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1f2rgBPH3vdiu4J1Wv_gIENm99UaQe_qd?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1J1HngJcFLMmFceZ_FQu6yU2gQBx0Xzmz?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1M0ScRjRHVFUrZLks8FDym2O8fTVHrVqt?usp=drive_link"
    }
  },
  {
    subject: "Control system", 
    resources: {
      books: "https://drive.google.com/drive/folders/1sOsf2CdpQ70vE4y9nXlgjYDcQeJBYect?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1mxCMKYQQfq3d1PvdtwQ62Q6iHxqohamD?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1BzftgpBuhBMEFZXFQKr1jmAlMWLAdMPY?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1WKH9QthF7E9hlmeCgRi_A8Fv9cs2qEKj?usp=drive_link"
    }
  },
  {
    subject: "Electromagnetic Field Theory", 
    resources: {
      books: "https://drive.google.com/drive/folders/1sOsf2CdpQ70vE4y9nXlgjYDcQeJBYect?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1mxCMKYQQfq3d1PvdtwQ62Q6iHxqohamD?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1BzftgpBuhBMEFZXFQKr1jmAlMWLAdMPY?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1WKH9QthF7E9hlmeCgRi_A8Fv9cs2qEKj?usp=drive_link"
    }
  },
  {
    subject: "Analog Electronics II", 
    resources: {
      books: "https://drive.google.com/drive/folders/1nbFh4fc3MC0ZruBs4uAo5PGXMswxGVKz?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1m7L-OBUjRdmMzNGPmPodtG28nDwVPr1L?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/127H7444Tig6lhZoZ6WgmxuZvUjNq_bu-?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1RIn4K0EAzFILAImdxSszLegWUVT5C9k6?usp=drive_link"
    }
  },
  {
    subject: "Fundamentals of Devops", 
    resources: {
      books: "https://drive.google.com/drive/folders/1nSsgZdRIoRUWS-ex-h6TWk7mbEe3St_f?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1RYYDWVuZuttIkjmWVCnIU1Iqj98mcuk2?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1blcithD829KSeR5G3_db3Hqw3UMRKCKc?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1qZxhhm1RfxUWYHCV18PhR6bjGAdwl7vG?usp=drive_link"
    }
  },
  {
    subject: "Fluid mechanics and hydraulic machines lab ", 
    resources: {
      books: "https://drive.google.com/drive/folders/1ClCWm3n0oR5nbpxVjj2lcto-aNAo-SmU?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1XBSe9SyMo6wXzCPgnMJOB1Wa9Iu1e0G0?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1EMP4uryPMlG9Fj-KV55TBRcVcMuR-z7_?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1mCOa_NJoqJhcSKQN2lz8GZ-QfNS28jCk?usp=drive_link"
    }
  },
  {
    subject: "Production Technology II", 
    resources: {
      books: "https://drive.google.com/drive/folders/1PlOXfl1Hh8lnDEDkCZN2PEP77mK9foKa?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1b0yj72aROzkOuAVmotsqJxrB393loPz-?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1HivFa_j5N_OiKD2u0EDNqrdmaOmAcGFr?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1jX3MmBGIfyTn1BG39RDez80CTqEMChMD?usp=drive_link"
    }
  },
  {
    subject: "IOT", 
    resources: {
      books: "https://drive.google.com/drive/folders/1ZXrsMVQS-aabFuSuAbqlaknFiFvUAtYE?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1aJ_s3bM9zN0cVmnpPHZjLXjB2gP7SnhD?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Wo7XCv0yOJ5-gCxiBYM-th90AOHXNHE4?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/18Q37020B0GOcD_7iQ92FaTINwNvVGjsM?usp=drive_link"
    }
  },
  {
    subject: "Strength of Materials", 
    resources: {
      books: "https://drive.google.com/drive/folders/1qC60Aq3LkscvL3FU6-xl_jARl4v_oqSO?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Emf_7bZ0XWB8_x2fBdOdu-I410ybgCG8?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/157wCrIAJmDpmIg1MJyEpqrrCn_OkWDnk?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1HrKoXE8FaobS1m8oXTNhznh6O8PHHH7Y?usp=drive_link"
    }
  },
  {
    subject: "Theory of Machines", 
    resources: {
      books: "https://drive.google.com/drive/folders/1aRyjZQTGeNuknhxUFHJe4By_jGemts-A?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1NV_j5YvlPWppkxtl4bH8jYRjd8uUHyY1?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1yPviGPFpPjGOMqHCIJmp1uavZ5ps2a7f?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1JstxkIRl7P95HwpVIuHMmOEZNhdxaqQl?usp=drive_link"
    }
  },
  {
    subject: "Thermal Engineering II lab", 
    resources: {
      books: "https://drive.google.com/drive/folders/1VlsFKJSLtBmQ37FZNiYP-8GwPt4vodPP?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1yWbYCkaM56KKx70Ct1etssdfy1v7-HQw?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1Sr3eh4VETAWdWUI8Jx2jBqDCJ-vqZyek?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1uxFXan_TdagtOjpQbtzOOJrCxWnuXCSx?usp=drive_link"
    }
  },
  {
    subject: "Machine Learning", 
    resources: {
      books: "https://drive.google.com/drive/folders/1spsIN3938ywxBhcd7CADiJohKMpCBqee?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1zSOXnKmytUYn3HzWhTi12Hl_cSUo3rwY?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/16ITELYIg1cSvIgm8y6ailQPP9HLjEfPn?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1W0-XKsSVO8rkGluL5xR_kJvWDi8z3FH2?usp=drive_link"
    }
  },
  {
    subject: "IT Workshop II ", 
    resources: {
      books: "https://drive.google.com/drive/folders/1DsvE8oP6fWv7dSRpXW_oBUOSEau_fC-6?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1Ba_R4BNyGHnMwdFIyHj5WYuuReuT261H?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1IDNoNW1qwmLsHg_xpP_gFj-82pMf8pCg?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1z3yHGNNginsso5wrkmiXrLyelCQ4wtYs?usp=drive_link"
    }
  },
  {
    subject: "Microprocessor & Microcontrollers", 
    resources: {
      books: "https://drive.google.com/drive/folders/1RtP6xlVIcP4VfLRLwiiV_MQdG_mXUsjb?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1usAV6gZw8HFgYAiL9DYwZMxtq-dC70jz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/17jUNKJKY612tg3QL0TvdQRKvCiv_HZar?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1qALRJIWkRt5232PAPrwoWmoNmQZbkrFY?usp=drive_link"
    }
  },
  {
    subject: "Logistics & Supply Chain Management ", 
    resources: {
      books: "https://drive.google.com/drive/folders/1Lgzks72O5hKev1WEMsN7pxlJgGr_HpjT?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1fFS6le7nFhyUoCAo_YjC90xc03cn2_Mz?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1buuWzseKak2EBAxgBIx8Gg438cYjQUpn?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1_IGkfpukD2koz_CauiRcWJHRkmp-FXOJ?usp=drive_link"
    }
  },
  {
    subject: "Calculus 2", 
    resources: {
      books: "https://drive.google.com/drive/folders/1b5-AOoDX_M3RS4HmY0rKyjeAk6lsxv2R?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1GZ_-scKSX2tq7XJ2p4N4CqEOuMw62MEO?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1i42Kewe2JB6oNsQeR9vad_HiyIV2HA1A?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1m9VrmzmQ6Gawruzy5W3fRoMPk92NSWWc?usp=drive_link"
    }
  },
  {
    subject: "Linear algebra", 
    resources: {
      books: "https://drive.google.com/drive/folders/1IDK-zT8Ro_um1KjB0-tPra3Qozq-1Pid?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1a9zj8ZQDjMHZvHHofojXW2Qb87s88k7o?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1_U4rd_-3ytsw65vIuNZV2kL6dy9t6IST?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1ZF3GAiL7kAMPvzbvRAox_ROnxySSo5c8?usp=drive_link"
    }
  },
  {
    subject: "Programming tools for mathematics", 
    resources: {
      books: "https://drive.google.com/drive/folders/1DAcGWEObOvNsaEG51cvprkgBLEkdMVYb?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1JUmJAbBbXNYX7zSXsqSC0wKfhKi7SOIh?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/12MYILkDQhByfmNxNX8TrvVL9lHWGimtV?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1QWmdN45hKTcxGPde7P6tdruqUAPodSqF?usp=drive_link"
    }
  },
  {
    subject: "Soft Skills and Personality Development", 
    resources: {
      books: "https://drive.google.com/drive/folders/1deNGwPwRUIP-LOMGj2NHXOCBJvugDDjN?usp=drive_link",
      notes: "https://drive.google.com/drive/folders/1nDqgNBKX5FfBcIsfPZYvJRvMxfn-EXQk?usp=drive_link",
      pyqs: "https://drive.google.com/drive/folders/1xR5V0zUNfOPL-CO_6cXtt1S1t8sbO9Wa?usp=drive_link",
      assignments: "https://drive.google.com/drive/folders/1XdRj6q3IvYPyxWX1gaPM5RQe0WqI6fw-?usp=drive_link"
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
