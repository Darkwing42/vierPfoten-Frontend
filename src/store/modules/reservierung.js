export default {
  state: {
    reservierungen: [
      {
        kundennummer: 101,
        kundenname: "Wagner",
        auftragsdatum: {
          datum: "2018-09-26",
          uhrzeit: "16:19"
        },
        tiere: [{ name: "Kira", tierart: "Hund", rasse: "Mischling" }],
        datum: {
          ankunft: {
            datum: "2018-09-28",
            uhrzeit: "12:00"
          },
          abholung: {
            datum: "2018-10 - 03",
            uhrzeit: "15:00"
          }
        }
      }
    ],
    reservierung: {
      kundennummer: 100,
      kundenname: "",
      tiere: [],
      datum: {
        ankunft: "",
        abholung: ""
      }
    }
  },
  mutations: {},
  getters: {},
  actions: {}
};
