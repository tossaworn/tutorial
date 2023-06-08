โปรแกรมที่ต้องใช้
[ ] python
[ ] vscode
[ ] docker

set python virtual environment และลง django
[ ] เปิด vscode folder lession2
    ctrl + shift + p
    type : Python: Create Environment
    เลือก venv
    เลือก python ในเครื่อง (ได้ folder .venv)
    เลือกไฟล์ lession2/code_update/requirements.txt เพื่อลง requirements
[ ] Terminal > New Terminal (อยู่ใน dir lession2)
    ตรง tab terminal ด้านขวา กดลูกศรลง ช้างเครื่องหมายบวก
    เลือก Command Prompt จะได้ Prompt คำสั่ง (.venv) ..
[ ] run : python -m pip install Django 


[ ] run : django-admin startproject lession2dj
    เพื่อสร้าง project
[ ] copy ไฟล์ code_update/requirements.txt มาวางใน folder lession2/lession2dj
    และพิจารณาไฟล์ requirements ที่ได้จากการลง
    pip install djangorestframework markdown django-filter django mysqlclient django-cors-headers
[ ] run : python manage.py startapp students
    เพื่อ สร้าง app students สังเกตุ folder ถูก generate ขึ้นมา
[ ] copy ไฟล์ code_update/settings.py มาวางทับไฟล์ lession2/lession2dj/lession2dj/settings.py
    พิจารณา ส่วนที่แก้ไขและเพิ่มเติมขึ้นมา
    -INSTALLED_APPS
      > rest_framework
      > corsheaders
      > students
    -MIDDLEWARE
      > corsheaders..
    -DATABASES
    -REST_FRAMEWORK
    -STATICFILES_DIRS
    -CORS_ORIGIN_ALLOW_ALL
    -SECRET_KEY (จะถูก generate ขึ้นมา และควรเป็นความลับ)
[ ] copy ไฟล์ code_update/urls_main/urls.py มาวางทับไฟล์ lession2/lession2dj/lession2dj/urls.py
    พิจารณา ส่วนที่แก้ไขและเพิ่มเติมขึ้นมา
    -ส่วน import
    -def test
    -path
    -static(settings..)
[ ] copy ไฟล์ code_update/students/models.py มาวางทับไฟล์ lession2/lession2dj/students/models.py และพิจารณา
[ ] copy ไฟล์ code_update/students/api.py มาวางทับไฟล์ lession2/lession2dj/students/api.py และพิจารณา
[ ] copy ไฟล์ code_update/students/urls.py มาวางทับไฟล์ lession2/lession2dj/students/urls.py และพิจารณา
[ ] copy โฟลเดอร์ code_update/static มาวางลงใน folder lession2/lession2dj และพิจารณาไฟล์ students.html


[ ] vscode > Terminal > (อยู่ใน dir lession2)
    run : docker-compose up -d
[ ] เปิด docker > Containers > lession2 > django > Terminal
[ ] run : python manage.py makemigrations
[ ] run : python manage.py migrate
[ ] ทำการ restart container django


[ ] ทดสอบเข้า localhost:8000
[ ] ทดสอบแก้ไข lession2/lession2dj/urls.py def test เป็น home 2. แล้วลองเข้า localhost:8000 ใหม่
[ ] ทดสอบเข้า localhost:8080 ดู db lession2, table students
[ ] ทดสอบเข้า localhost:8000/static/students.html ลอง crud (create read update delete)


--------------------------------------------------


[ ] ใช้ postman/thunder สร้าง url read
    post url : http://localhost:8000/students/read
[ ] ใช้ postman/thunder สร้าง url create
    post url : http://localhost:8000/students/create
    data : {"name":"","age":0}
[ ] ใช้ postman/thunder สร้าง url update
    post url : http://localhost:8000/students/update
    data : {"id":"","name":"","age":0}
[ ] ใช้ postman/thunder สร้าง url delete
    post url : http://localhost:8000/students/del
    data : {"id":""}


source : https://github.com/docker/awesome-compose/tree/master/official-documentation-samples/django/
source : https://docs.djangoproject.com/en/4.2/intro/tutorial01/
source : https://code.visualstudio.com/docs/python/environments
source : https://www.django-rest-framework.org/
source : https://docs.djangoproject.com/en/4.2/howto/static-files/