[ ] โปรแกรมที่ต้องใช้ nodejs lts
[ ] โปรแกรมที่ต้องใช้ vscode
[ ] โปรแกรมที่ต้องใช้ docker


[ ] เปิด vscode folder lession1
    เปิด Terminal > New Terminal (อยู่ใน dir lession1)
    run คำสั่ง npx express-generator เพื่อสร้างโปรเจค nodejs อัตโนมัติ
    source : https://expressjs.com/en/starter/generator.html
[ ] copy file code_update/app.js วางทับ lession1/app.js และพิจารณาส่วนที่เพิ่มเข้ามา ส่วน cors
[ ] copy file code_update/index.js วางทับ lession1/routes/index.js และพิจารณาส่วนที่เพิ่มเข้ามา ส่วน require, route ที่เพิ่มขึ้นมา
[ ] copy folder code_update/config วางลงใน folder lession1 และพิจารณา code
[ ] copy folder code_update/controller วางลงใน folder lession1 และพิจารณา code
[ ] copy folder code_update/frontend วางลงใน folder lession1/public และพิจารณา code


[ ] พิจารณา code Dockerfile และ docker-compose.yml
    เปิด vscode Terminal > New Terminal (อยู่ใน dir lession1)
    run คำสั่ง docker-compose up -d


[ ] ทดสอบเข้า localhost:3000
[ ] ทดสอบเข้า localhost:3000/test
[ ] ทดสอบแก้ไขไฟล์ routes/index.js บรรทัด res.send('ทดสอบ'); เป็น 'ทดสอบ 2' และเข้า localhost:3000/test ใหม่
[ ] ทดสอบเข้า localhost:3000/frontend/students.html ลองเพิ่ม ลบ แก้ไข
[ ] ทดสอบเข้า localhost:8081


[ ] ใช้ postman/thunder สร้าง url read
    post url : http://localhost:3000/students/read
[ ] ใช้ postman/thunder สร้าง url create
    post url : http://localhost:3000/students/create
    data : {"name":"","age":0}
[ ] ใช้ postman/thunder สร้าง url update
    post url : http://localhost:3000/students/update
    data : {"id":"","name":"","age":0}
[ ] ใช้ postman/thunder สร้าง url delete
    post url : http://localhost:3000/students/del
    data : {"id":""}


[] ทดลองเข้า docker container nodejs ดู logs
[] ทดลองเข้า docker container nodejs ดู terminal แล้วลองใช้คำสั่งเช่น ls