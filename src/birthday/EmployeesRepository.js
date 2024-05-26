import fs from "fs";
import path from "path";
import { Employee } from "./Employee";

export class EmployeesRepository {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getEmployeesByBirthDate(ourDate) {
    const data = fs.readFileSync(
      path.resolve(__dirname, `${this.fileName}`),
      "UTF-8"
    );
    const lines = data.split(/\r?\n/);
    lines.shift(); 
    const employees = lines
      .map((line) => this.createEmployeeFromLine(line))
      .filter((employee) => employee.isBirthday(ourDate));

    return employees;
  }

  createEmployeeFromLine(line) {
    const employeeData = line.split(", ");
    return new Employee(
      employeeData[1],
      employeeData[0],
      employeeData[2],
      employeeData[3]
    );
  }
}
