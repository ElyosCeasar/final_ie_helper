import axios from "axios";
class appService {
  url = "http://localhost:5000";
  //url = "http://hw2-ie-back-master.herokuapp.com";

  getAllForms = () => {
    return axios.get(this.url + "/api/forms");
  };
  getSpeceficFormById = id => {
    return axios.get(this.url + "/api/forms/" + id);
  };
  postNewForm = newForm => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoyNTgwNjY1MTk0LCJpYXQiOjE1ODAwNjUxOTN9.mLfmKxikIR-rwRos0zYyDT44ckNUljc3wURVhVxM82g";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    return axios.post(this.url + "/api/forms", newForm, config);
  };

  postComplitedFormByClient = (ComplitedForm, id) => {
    return axios.post(this.url + "/api/answer/" + id, ComplitedForm);
  };
}

export default appService;
//https://hw2-ie-front-master.herokuapp.com/ | https://git.heroku.com/hw2-ie-front-master.git
//https://github.com/ElyosCeasar/hw2_ie_front-master
