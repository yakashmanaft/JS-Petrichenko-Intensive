function myFirstApp (name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        // Я владею: html
        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
        }
    }

    showSkills()

    function checkAge() {
        //age > 18
        // Отличные шансы стать Frontend разработчиком
        // либо круто что задумался
        if(age >= 18) {
            console.log('Отличные шансы стать Frontend разработчиком')
        } else {
            console.log('круто что задумался')
        }
    }

    checkAge()

    function calcPow(num) {
        return num * num;
    }

    console.log(calcPow(4));
}

myFirstApp('Sergey', 30);