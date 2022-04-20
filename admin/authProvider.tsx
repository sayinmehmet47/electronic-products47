


const authProvider = {
  login: ({username}:{username:string}) => {
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject("Unknown method"),
};

export default authProvider;
