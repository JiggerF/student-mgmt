const express = require('express');
const app = express();
const stub_port = 4000;
const router = express.Router();

app.use('/', router);

app.listen(stub_port, () => {
  console.log("Student-API stub service listening on port 4000");
)};


//TODO: STUB for Student-API Service
app.get('/student-api/getStudentId/12345', (req, res) => {
  const mockStudentInfo = [{
    studentId: 12345,
    firstName: 'Andrew',
    lastName: 'Smith',
    department: 'Engineering',
    level: 'Senior',
  }];
  return res.status(200).json(mockStudentInfo);
});
