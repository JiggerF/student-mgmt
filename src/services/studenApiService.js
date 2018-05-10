const STUDENT_API_HOST = require('../env').STUDENT_API_HOST;


const getStudentInfo = (studentid) => {
  // call student-api method to retrieve student info
  getStudentInfoAPI(studentid);
};

// REST call to student-api
const getStudentInfoAPI = (studentid) => {
  let options = {
    uri: `${STUDENT_API_HOST}/API/${studentid}`,
    method: `GET`,
    headers: {
      'Accept': 'application/json',
    },
    json: true;
    body: studentid,
  };

  return request(options)
    .catch(error => {
      //if request not found
      if(error.statusCode === 404) {
        return null;
      }
      throw error;
    });
};
