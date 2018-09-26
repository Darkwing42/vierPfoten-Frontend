export default {
  state: {
    loggedIn: false,
    username: "darkwing",
    roles: "Admin",
    token: "",
    messages: [
      {
        from: "Admin",
        body: "Hallo ich bin ein Text der benutzt werden soll.",
        read: false
      },
      {
        from: "Azubi1",
        body: "test",
        read: false
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
};
