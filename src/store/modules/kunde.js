export default {
  state: {
    kunden: [
      {
        kundennummer: 101,
        name: "Wagner",
        vorname: "Jean-Marc",
        adresse: "123, rue de Belvaux",
        postleitzahl: 4510,
        stadt: "Oberkorn",
        tiere: [
          { name: "Kira", tierart: "Hund", rasse: "Mischling" },
          { name: "Miko", tierart: "Hamster", rasse: "Teddyhamster" }
        ]
      },
      {
        kundennummer: 102,
        name: "Pels",
        vorname: "Ruht",
        adresse: "Dorfbauerschaft 21",
        postleitzahl: 484848,
        stadt: "Neuenkirchen",
        tiere: [
          { name: "Uma", tierart: "Hund", rasse: "Labrador " },
          { name: "Uma", tierart: "Hund", rasse: "Labrador " },
          { name: "Uma", tierart: "Hund", rasse: "Labrador " },
          { name: "Uma", tierart: "Hund", rasse: "Labrador " }
        ]
      }
    ]
  },
  mutations: {},
  getters: {},
  actions: {}
};
